module.exports = function makeGetAdminProducts({ listProducts }) {
  return async function getAdminProducts(req, res) {
    try {
      const { ownerId } = req.body
      const productsList = await listProducts({ ownerId })
      res.render('admin/products', { data: { products: productsList } })
    } catch (err) {
      res.render('admin/products/new', { errorMessages: err.message })
    }
  }
}
