const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, listUsers } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makeGetUsers = require('./get-users')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const getUsers = makeGetUsers({ listUsers })

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  getUsers,
}
