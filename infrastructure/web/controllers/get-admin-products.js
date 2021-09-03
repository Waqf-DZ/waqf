module.exports = function makeGetAdminProducts({ listProducts }) {
  return async function getAdminProducts(req, res) {
    try {
      const { ownerId } = req.body
      const productsList = await listProducts({ ownerId })
      res.render('products/index', { data: { products: productsList } })
    } catch (err) {
      res.render('products/new', { errorMessages: [err.message] })
    }
  }
}
