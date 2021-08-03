const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, signInUser } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makeSignInUser = require('./post-signin')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const postSignin = makeSignInUser({ signInUser, flashMessages })

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  postSignin,
}
