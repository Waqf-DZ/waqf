module.exports = function makeGetAdminProduct({ getProduct }) {
  return async function getAdminProduct(req, res) {
    const productId = req.params.id
    try {
      const product = await getProduct(productId)
      res.render('admin/products/_product-id', { data: { product } })
    } catch (err) {
      res.render('admin/products/index', { errorMessages: [err.message] })
    }
  }
}
