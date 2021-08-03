const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, listOrders } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makeGetAdminOrders = require('./get-admin-orders')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const getAdminOrders = makeGetAdminOrders({ listOrders })

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  getAdminOrders,
}
