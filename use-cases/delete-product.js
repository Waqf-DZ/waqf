module.exports = function makeDeleteProduct({ productsDB }) {
  return async function deleteProduct(productId) {
    let product = await productsDB.deleteProduct(productId)
    return Promise.resolve(product ? product.id : null)
  }
}
