module.exports = function makeGetUserNewProduct() {
  return async function getUserNewProduct(req, res) {
    res.render('profile/products/new')
  }
}
