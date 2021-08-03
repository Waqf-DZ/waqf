const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, listUsers, listProducts, signInUser, listOrders } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makeGetAdminOrders = require('./get-admin-orders')
const makePostNewUser = require('./post-new-user')
const makeGetAdminProducts = require('./get-admin-products')
const makeGetUsers = require('./get-users')
const makePostSignin = require('./post-signin')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
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

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  getAdminOrders,
  postNewUser,
  getProducts,
  getUsers,
  postSignin,
}
