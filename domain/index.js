const getUniqueId = require('../infrastructure/get-unique-id')

const buildMakeProduct = require('./makeProduct')
const buildMakeUser = require('./makeUser')
const buildMakeOrder = require('./makeOrder')

const makeOrder = buildMakeOrder({ getUniqueId })
const makeProduct = buildMakeProduct({ getUniqueId })
const makeUser = buildMakeUser({ getUniqueId })

module.exports = Object.freeze({
  makeOrder,
  makeProduct,
  makeUser,
})
