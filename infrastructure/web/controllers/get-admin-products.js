module.exports = function getProductsList({ listProducts }) {
  return async function (req, res) {
    try {
      const { ownerId } = req.body
      const productsList = await listProducts({ ownerId })
      res.render('admin/orders', { data: { products: productsList } })
    } catch (err) {
      res.render('admin/orders', { errorMessages: err.message })
    }
  }
}
