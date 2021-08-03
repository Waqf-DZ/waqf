const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const adminMakePostUser = require('./post-new-user')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const adminPostUser = adminMakePostUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  adminPostUser,
}
