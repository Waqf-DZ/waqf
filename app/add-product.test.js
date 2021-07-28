const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const makeAddProduct = require('./add-product')
const makeListProducts = require('./list-products')

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
  t.ok(product.getId(), 'return the created product')
  const products = await listProducts({ ownerId })
  const found = products.find((p) => (p.ownerId = ownerId))
  t.ok(found, 'add a product to the database')
})
