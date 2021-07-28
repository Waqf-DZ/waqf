module.exports = function makeGetProduct({ productsDB }) {
  return async function getProduct(productId) {
    let product = await productsDB.getProduct(productId)
    return Promise.resolve(product || null)
  }
}
