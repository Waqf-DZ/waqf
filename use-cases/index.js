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
const makeGetAdminOrders = require('./list-orders')

const getUser = makeGetUser({ usersDB: store })
const addUser = makeAddUser({ usersDB: store, hashPassword })
const signInUser = makeSignInUser({ getUser, hashPassword })
const listOrders = makeGetAdminOrders({ ordersDB: store })

module.exports = Object.freeze({
  getUser,
  addUser,
  signInUser,
  listOrders,
})
