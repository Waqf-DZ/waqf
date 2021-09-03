module.exports = function makeUpdateAdminProduct({
  updateProduct,
  flashMessages,
  adjustUploadPath,
}) {
  return async function updateAdminProduct(req, res) {
    try {
      const productInfo = {
        id: req.params.id,
        ...req.body,
      }
      if (req.file) {
        productInfo.productImage = adjustUploadPath(req.file.path)
      }
      const updatedProduct = await updateProduct(productInfo)
      if (updatedProduct) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/products')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/products')
      }
    } catch (err) {
      res.render('products/index', { errorMessages: [err.message] })
    }
  }
}
