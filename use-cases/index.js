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
const makePostNewProduct = require('./add-product')
const makeGetAdminOrders = require('./list-orders')
const makeGetAdminProducts = require('./list-products')
const makeGetUsers = require('./list-users')

const getUser = makeGetUser({ usersDB: store })
const addUser = makeAddUser({ usersDB: store, hashPassword })
const signInUser = makeSignInUser({ getUser, hashPassword })
const addProduct = makePostNewProduct({ productsDB: store })
const listOrders = makeGetAdminOrders({ ordersDB: store })
const listProducts = makeGetAdminProducts({ productsDB: store })
const listUsers = makeGetUsers({ usersDB: store })

module.exports = Object.freeze({
  getUser,
  addUser,
  signInUser,
  addProduct,
  listOrders,
  listProducts,
  listUsers,
})
