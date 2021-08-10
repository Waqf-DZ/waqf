const FakeStore = require('../infrastructure/store/fake')

const {
  hashPassword,
  verifyPassword,
} = require('../infrastructure/hash-password')

const store = new FakeStore()

const makeAddUser = require('./add-user')
const makeSignInUser = require('./sign-in-user')
const makeGetUser = require('./get-user')
const makeAddProduct = require('./add-product')
const makeGetProduct = require('./get-product')
const makeAddOrder = require('./add-order')
const makeGetOrder = require('./get-order')
const makeListOrders = require('./list-orders')
const makeAcceptOrder = require('./accept-order')
const makeListProducts = require('./list-products')
const makeListUsers = require('./list-users')
const makeUpdateUser = require('./update-user')
const makeUpdateOrder = require('./update-order')

const makeUpdateProduct = require('./update-product')

const addUser = makeAddUser({ usersDB: store, hashPassword })
const getUser = makeGetUser({ usersDB: store })
const listUsers = makeListUsers({ usersDB: store })
const signInUser = makeSignInUser({ getUser, verifyPassword })
const updateUser = makeUpdateUser({ usersDB: store, getUser })

const addProduct = makeAddProduct({ productsDB: store })
const getProduct = makeGetProduct({ productsDB: store })
const listProducts = makeListProducts({ productsDB: store })
const updateProduct = makeUpdateProduct({ productsDB: store, getProduct })

const addOrder = makeAddOrder({ ordersDB: store })
const getOrder = makeGetOrder({ ordersDB: store })
const listOrders = makeListOrders({ ordersDB: store })
const updateOrder = makeUpdateOrder({ ordersDB: store, getOrder })
const acceptOrder = makeAcceptOrder({
  ordersDB: store,
  productsDB: store,
  getOrder,
  getProduct,
})

module.exports = Object.freeze({
  addUser,
  getUser,
  signInUser,
  listUsers,
  updateUser,
  addOrder,
  getOrder,
  updateOrder,
  acceptOrder,
  listOrders,
  addProduct,
  getProduct,
  listProducts,
  updateProduct,
})
