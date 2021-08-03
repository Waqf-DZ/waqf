module.exports = function AdminProducts({ listProducts }) {
  return async function getProductsList(req, res) {
    try {
      const { ownerId } = req.body
      const productsList = await listProducts({ ownerId })
      res.render('admin/orders', { data: { products: productsList } })
    } catch (err) {
      res.render('admin/orders', { errorMessages: err.message })
    }
  }
}
