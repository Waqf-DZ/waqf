module.exports = function makeGetUserProduct({ getProduct }) {
  return async function handleGetProduct(req, res) {
    const productId = req.params.id
    try {
      const product = await getProduct(productId)
      res.render('products/_product-id', { data: { product } })
    } catch (err) {
      res.render('products/', { errorMessages: [err.message] })
    }
  }
}
