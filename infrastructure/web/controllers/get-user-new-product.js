module.exports = function makeGetUserNewProduct() {
  return async function getUserNewProduct(req, res) {
    res.render('products/new')
  }
}
