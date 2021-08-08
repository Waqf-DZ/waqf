const { makeProduct } = require('../domain/index')

module.exports = function makeUpdateProduct({ productsDB, getProduct }) {
  return async function updateProduct(productInfo) {
    const oldProduct = await getProduct(productInfo.id)
    const product = makeProduct(Object.assign({}, oldProduct, productInfo))
    const updatedOrder = await productsDB.updateProduct(product)
    return Promise.resolve(updatedOrder)
  }
}
