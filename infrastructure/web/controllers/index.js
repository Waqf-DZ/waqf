const flashMessages = require('../config/flash-messages')

const { addUser } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages })
const getNewOrder = makeGetNewOrder()

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
}
