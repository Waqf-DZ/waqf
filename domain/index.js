const getUniqueId = require('../infrastructure/get-unique-id')

const buildMakeProduct = require('./makeProduct')
const makeProduct = buildMakeProduct({ getUniqueId })

module.exports = Object.freeze({
  makeProduct,
})
