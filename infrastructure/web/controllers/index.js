const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, addProduct } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makePostNewProduct = require('./post-new-product')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const postNewProduct = makePostNewProduct({
  addProduct,
  flashMessages,
  sanitize,
})

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  postNewProduct,
}
