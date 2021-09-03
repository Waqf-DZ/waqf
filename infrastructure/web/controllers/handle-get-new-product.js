module.exports = function makeGetUserNewProduct() {
  return async function handleGetNewProduct(req, res) {
    res.render('products/new')
  }
}
