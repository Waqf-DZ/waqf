const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const {
  addUser,
  addOrder,
  addProduct,
  listUsers,
  listProducts,
  signInUser,
  listOrders,
} = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostSignup = require('./post-signup')
const makePostSignin = require('./post-signin')
const makePostNewUser = require('./post-new-user')
const makeGetUsers = require('./get-users')

const makeGetNewOrder = require('./get-new-order')
const makePostNewOrder = require('./post-new-order')
const makeGetAdminOrders = require('./get-admin-orders')
const makeGetUserOrders = require('./get-user-orders')

const makePostNewProduct = require('./post-new-product')
const makeGetAdminProducts = require('./get-admin-products')
const makeGetUserProducts = require('./get-user-products')

const getSignUp = makeGetSignUp()
const postSignup = makePostSignup({
  addUser,
  flashMessages,
  sanitize,
  validator,
})
const postSignin = makePostSignin({ signInUser, flashMessages })

const postNewUser = makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})
const getUsers = makeGetUsers({ listUsers })

const getNewOrder = makeGetNewOrder()
const postNewOrder = makePostNewOrder({ addOrder, flashMessages, sanitize })
const getAdminOrders = makeGetAdminOrders({ listOrders })
const getUserOrders = makeGetUserOrders({ listOrders })

const postNewProduct = makePostNewProduct({
  addProduct,
  flashMessages,
  sanitize,
})
const getAdminProducts = makeGetAdminProducts({ listProducts })
const getUserProducts = makeGetUserProducts({ listProducts })

module.exports = {
  getSignUp,
  postSignup,
  postSignin,
  postNewUser,
  getUsers,
  getNewOrder,
  postNewOrder,
  getAdminOrders,
  getUserOrders,
  postNewProduct,
  getAdminProducts,
  getUserProducts,
}
