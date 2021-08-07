module.exports = function makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
}) {
  return async function postUserNewProduct(req, res) {
    try {
      const ownerId = req.user.id
      const { productName, type, serial, description } = req.body
      const imageFile = req.file
      const imageUrl = imageFile ? imageFile.path : undefined

      // make an early check for the rquired fileds
      if (!ownerId || !productName || !type || !serial) {
        req.flash('error', flashMessages.INPUTS_NOT_VALID)
        res.redirect('/profile/products/new')
        return
      }

      const newProduct = await addProduct({
        ownerId,
        productName: sanitize(productName),
        type,
        serial,
        imageUrl,
        description,
      })

      if (newProduct) {
        req.flash('success', flashMessages.NEW_PRODUCT_SUCCESS)
        res.redirect('/profile/products')
        return
      } else {
        req.flash('error', flashMessages.NEW_PRODUCT_FAILURE)
        res.redirect('/profile/products/new')
      }
    } catch (err) {
      res.render('profile/products/new', { errorMessages: err.message })
    }
  }
}
