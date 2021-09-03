module.exports = function makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
  adjustUploadPath,
}) {
  return async function handleCreateProduct(req, res) {
    try {
      const productInfo = {
        id: req.params.id,
        ownerId: req.user.id,
        name: sanitize(req.body.name),
        serial: sanitize(req.body.serial),
        type: sanitize(req.body.type),
        isBroken: req.body.isBroken == 'true',
        freeDays: Number(req.body.freeDays),
        dayPrice: Number(req.body.dayPrice),
        description: sanitize(req.body.description),
      }
      if (req.file) {
        productInfo.imageUrl = adjustUploadPath(req.file.path)
      }
      await addProduct(productInfo)
      req.flash('success', flashMessages.NEW_PRODUCT_SUCCESS)
      res.redirect('/products')
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.NEW_PRODUCT_FAILURE)
      res.redirect('/products/new')
    }
  }
}
