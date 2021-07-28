const { makeProduct } = require('../domain/index')

module.exports = function MakeAddProduct({productsDB}) {
  return async function addProduct(productInfo) {
    const product = makeProduct(productInfo)
    await productsDB.addProduct(product)
    return Promise.resolve(product)
  }
}