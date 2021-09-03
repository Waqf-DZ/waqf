module.exports = function makeUpdateUserProduct({
  updateProduct,
  flashMessages,
  adjustUploadPath,
  sanitize,
}) {
  return async function handleUpdateProduct(req, res) {
    try {
      const productInfo = {
        id: req.params.id,
        name: sanitize(req.body.name),
        serial: sanitize(req.body.serial),
        type: sanitize(req.body.type),
        isBroken: req.body.isBroken == 'true',
        freeDays: Number(req.body.freeDays),
        dayPrice: Number(req.body.dayPrice),
        description: sanitize(req.body.description),
      }
      if (req.file) {
        productInfo.productImage = adjustUploadPath(req.file.path)
      }
      await updateProduct(productInfo)
      req.flash('success', flashMessages.PRODUCT_UPDATE_SUCCESS)
      res.redirect('/products')
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.PRODUCT_UPDATE_FAILURE)
      res.redirect('/products')
    }
  }
}
