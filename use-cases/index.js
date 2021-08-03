const FakeStore = require('../infrastructure/store/fake')

function hashPassword(password) {
  return password
}

const store = new FakeStore({
  terms: [],
  translations: [],
})

const makeAddUser = require('./add-user')
const makeSignInUser = require('./sign-in-user')
const makeGetUser = require('./get-user')
const makeAddProduct = require('./add-product')
const makeAddOrder = require('./add-order')
const makeListOrders = require('./list-orders')
const makeListProducts = require('./list-products')
const makeListUsers = require('./list-users')

const getUser = makeGetUser({ usersDB: store })
const addUser = makeAddUser({ usersDB: store, hashPassword })
const signInUser = makeSignInUser({ getUser, hashPassword })
const addProduct = makeAddProduct({ productsDB: store })
const addOrder = makeAddOrder({ ordersDB: store })
const listOrders = makeListOrders({ ordersDB: store })
const listProducts = makeListProducts({ productsDB: store })
const listUsers = makeListUsers({ usersDB: store })

module.exports = Object.freeze({
  getUser,
  addUser,
  signInUser,
  addProduct,
  addOrder,
  listOrders,
  listProducts,
  listUsers,
})
