module.exports = function makeGetUserProducts({ listProducts }) {
  return async function getUserProducts(req, res) {
    try {
      const ownerId = req.user.id
      const productsList = await listProducts({ ownerId })
      res.render('profile/products/index', { data: { products: productsList } })
    } catch (err) {
      res.render('profile/products/index', { errorMessages: [err.message] })
    }
  }
}
