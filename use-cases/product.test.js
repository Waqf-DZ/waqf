const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const makeAddProduct = require('./add-product')
const makeGetProduct = require('./get-product')
const makeListProducts = require('./list-products')
const makeDeleteProduct = require('./delete-product')

test('add product', async (t) => {
  const productsDB = new FakeStore()
  const addProduct = makeAddProduct({ productsDB })
  const listProducts = makeListProducts({ productsDB })

  const ownerId = 'ownerId'
  const product = await addProduct({
    type: 'type',
    serial: 'serial',
    ownerId,
    freeDays: 0,
    dayPrice: 0,
  })
  t.ok(product.id, 'return the created product')
  const products = await listProducts({ ownerId })
  const found = products.find((p) => (p.ownerId = ownerId))
  t.ok(found, 'add a product to the database')
})

test('get product', async (t) => {
  const productsDB = new FakeStore()
  const addProduct = makeAddProduct({ productsDB })
  const getProduct = makeGetProduct({ productsDB })

  const ownerId = 'ownerId'
  const product = await addProduct({
    type: 'type',
    serial: 'serial',
    ownerId,
    freeDays: 0,
    dayPrice: 0,
  })
  let fetched = await getProduct(product.id)
  t.ok(fetched, 'return product by id')
  fetched = await getProduct('wrong_id')
  t.equal(fetched, null, 'return null if no product found')
})

test('delete product', async (t) => {
  const productsDB = new FakeStore()
  const addProduct = makeAddProduct({ productsDB })
  const listProducts = makeListProducts({ productsDB })
  const deleteProduct = makeDeleteProduct({ productsDB })

  const ownerId1 = 'ownerId1'
  const product = await addProduct({
    type: 'type',
    serial: 'serial',
    ownerId: ownerId1,
    freeDays: 0,
    dayPrice: 0,
  })
  let beforeProducts = await listProducts({ ownerId: ownerId1 })
  const beforeLength = beforeProducts.length
  const deletedId = await deleteProduct(product.id)
  let afterProducts = await listProducts({ ownerId: ownerId1 })
  t.equal(beforeLength, afterProducts.length + 1, 'delete a product by id')
  t.equal(deletedId, product.id, 'return deleted product id')
})

test('list products', async (t) => {
  const productsDB = new FakeStore()
  const addProduct = makeAddProduct({ productsDB })
  const listProducts = makeListProducts({ productsDB })

  const ownerId1 = 'ownerId1'
  const ownerId2 = 'ownerId2'
  await addProduct({
    type: 'type',
    serial: 'serial',
    ownerId: ownerId1,
    freeDays: 0,
    dayPrice: 0,
  })
  await addProduct({
    type: 'type',
    serial: 'serial',
    ownerId: ownerId2,
    freeDays: 0,
    dayPrice: 0,
  })
  let products = await listProducts({ ownerId: ownerId1 })
  t.equal(products.length, 1, 'can list products by ownerId')
  products = await listProducts()
  t.equal(products.length, 2, 'list all products if no filter given')
  products = await listProducts({ ownerId: 'wrong' })
  t.equal(products.length, 0, 'return empty array if no products found')
})
