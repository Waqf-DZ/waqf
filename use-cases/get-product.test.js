const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const makeAddProduct = require('./add-product')
const makeGetProduct = require('./get-product')

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
