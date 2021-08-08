module.exports = function makeUpdateUserProduct({
  updateProduct,
  flashMessages,
}) {
  return async function updateUserProduct(req, res) {
    try {
      const productId = req.query.id
      const userParams = req.body
      const imageFile = req.file
      if (imageFile) {
        userParams.productImage = imageFile.path
      }

      const updatedProduct = await updateProduct({ productId, userParams })

      if (updatedProduct) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('products')
      }
    } catch (err) {
      res.render('profile/products/index', { errorMessages: [err.message] })
    }
  }
}
