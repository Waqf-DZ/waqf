const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, listUsers, listProducts, signInUser } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makeGetAdminProducts = require('./get-admin-products')
const makeGetUsers = require('./get-users')
const makePostSignin = require('./post-signin')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const getProducts = makeGetAdminProducts({ listProducts })
const getUsers = makeGetUsers({ listUsers })
const postSignin = makePostSignin({ signInUser, flashMessages })

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  getProducts,
  getUsers,
  postSignin,
}
