const FakeStore = require('../infrastructure/store/fake')

function hashPassword(password) {
  return password
}

const store = new FakeStore()

const makeAddUser = require('./add-user')
const makeSignInUser = require('./sign-in-user')
const makeGetUser = require('./get-user')
const makeAddProduct = require('./add-product')
const makeAddOrder = require('./add-order')
const makeListOrders = require('./list-orders')
const makeListProducts = require('./list-products')
const makeListUsers = require('./list-users')
const makeUpdateUser = require('./update-user')

const addUser = makeAddUser({ usersDB: store, hashPassword })
const getUser = makeGetUser({ usersDB: store })
const signInUser = makeSignInUser({ getUser, hashPassword })
const addProduct = makeAddProduct({ productsDB: store })
const addOrder = makeAddOrder({ ordersDB: store })
const listOrders = makeListOrders({ ordersDB: store })
const listProducts = makeListProducts({ productsDB: store })
const listUsers = makeListUsers({ usersDB: store })
const updateUser = makeUpdateUser({ usersDB: store })

module.exports = Object.freeze({
  addUser,
  getUser,
  signInUser,
  listUsers,
  addOrder,
  listOrders,
  addProduct,
  listProducts,
  updateUser,
})
