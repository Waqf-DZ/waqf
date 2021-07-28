const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const makeAddProduct = require('./add-product')
const makeListProducts = require('./list-products')

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
