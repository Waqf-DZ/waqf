const getUniqueId = require('../infrastructure/get-unique-id')
const sanitize = require('../infrastructure/sanitize')

const buildMakeProduct = require('./makeProduct')
const makeProduct = buildMakeProduct({getUniqueId, sanitize})

module.exports = Object.freeze({
  makeProduct
})