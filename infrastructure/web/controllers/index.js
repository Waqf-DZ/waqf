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
  updateUser,
} = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makePostNewProduct = require('./post-new-product')
const makePostNewOrder = require('./post-new-order')
const makeGetAdminOrders = require('./get-admin-orders')
const makePostNewUser = require('./post-new-user')
const makeGetAdminProducts = require('./get-admin-products')
const makeGetUsers = require('./get-users')
const makePostSignin = require('./post-signin')
const makePutUserSettings = require('./put-user-settings')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const postNewProduct = makePostNewProduct({
  addProduct,
  flashMessages,
  sanitize,
})
const postNewOrder = makePostNewOrder({ addOrder, flashMessages, sanitize })
const getAdminOrders = makeGetAdminOrders({ listOrders })
const postNewUser = makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})
const getProducts = makeGetAdminProducts({ listProducts })
const getUsers = makeGetUsers({ listUsers })
const postSignin = makePostSignin({ signInUser, flashMessages })
const putUserSettings = makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
})

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  postNewProduct,
  postNewOrder,
  getAdminOrders,
  postNewUser,
  getProducts,
  getUsers,
  postSignin,
  putUserSettings,
}
