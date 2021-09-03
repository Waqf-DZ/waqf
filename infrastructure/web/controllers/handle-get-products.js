module.exports = function makeGetUserProducts({ listProducts }) {
  return async function handleGetProducts(req, res) {
    try {
      const ownerId = req.user.id
      const productsList = req.user.isAdmin
        ? await listProducts()
        : await listProducts({ ownerId })
      res.render('products/index', {
        data: { products: productsList },
      })
    } catch (err) {
      console.log(err)
      res.redirect('/products')
    }
  }
}
