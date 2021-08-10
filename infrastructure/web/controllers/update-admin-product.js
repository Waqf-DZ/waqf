module.exports = function makeUpdateAdminProduct({
  updateProduct,
  flashMessages,
  adjustUploadPath,
}) {
  return async function updateAdminProduct(req, res) {
    try {
      const productInfo = {
        id: req.params.id,
        productImage: req.file ? adjustUploadPath(req.file.path) : null,
        ...req.body,
      }
      const updatedProduct = await updateProduct(productInfo)
      if (updatedProduct) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/admin/products')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/admin/products')
      }
    } catch (err) {
      res.render('admin/products/index', { errorMessages: [err.message] })
    }
  }
}
