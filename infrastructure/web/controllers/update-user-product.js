module.exports = function makeUpdateUserProduct({
  updateProduct,
  flashMessages,
}) {
  return async function updateUserProduct(req, res) {
    try {
      const productInfo = {
        id: req.params.id,
        productImage: req.file ? req.file.path : null,
        ...req.body,
      }
      const updatedProduct = await updateProduct(productInfo)
      if (updatedProduct) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/profile/products')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/profile/products')
      }
    } catch (err) {
      res.render('profile/products/index', { errorMessages: [err.message] })
    }
  }
}
