module.exports = function makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
}) {
  return async function postUserNewProduct(req, res) {
    try {
      const ownerId = req.user.id
      const { name, type, serial, description } = req.body
      const imageFile = req.file
      const imageUrl = imageFile ? imageFile.path : undefined

      const newProduct = await addProduct({
        ownerId,
        type,
        imageUrl,
        name: sanitize(name),
        serial: sanitize(serial),
        description: sanitize(description),
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
      res.render('profile/products/new', { errorMessages: [err.message] })
    }
  }
}
