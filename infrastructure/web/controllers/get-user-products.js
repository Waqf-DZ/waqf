module.exports = function makeGetUserProducts({ listProducts }) {
  return async function getUserProducts(req, res) {
    try {
      const productId = req.params.id
      const user = req.user
      const ownerId = user ? user.id : 'org_1'

      if (productId) {
        getUserProductById(req, res, listProducts, productId)
      } else {
        const productsList = await listProducts({ ownerId })
        res.render('profile/products/index', {
          data: { products: productsList },
        })
      }
    } catch (err) {
      res.render('profile/products/index', { errorMessages: [err.message] })
    }
  }
}

// NOTE: THIS METHOD CAN BE MOVED LATER TO A SEPRATE CONTROLLER
async function getUserProductById(req, res, listProducts, productId) {
  try {
    const productsList = await listProducts()
    const product = productsList.filter((product) => product.id == productId)[0]

    res.render('profile/products/_product-id', { data: { product } })
  } catch (err) {
    res.render('profile/products/', { errorMessages: [err.message] })
  }
}
