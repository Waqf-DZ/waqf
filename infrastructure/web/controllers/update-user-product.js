module.exports = function makeUpdateUserProduct({
  updateProduct,
  flashMessages,
}) {
  return async function updateUserProduct(req, res) {
    try {
      const productId = req.query.id
      const userParams = req.body
      const imageFile = req.file

      console.log('COOL THINGS ARE GONNA HAPPEN')

      if (imageFile) {
        userParams.productImage = imageFile.path
      }

      const updatedProduct = await updateProduct({ productId, userParams })

      if (updatedProduct) {
        req.flash('success', flashMessages.XXX)
        res.redirect('orders')
      }
    } catch (err) {
      res.render('profile/orders/index', { errorMessages: [err.message] })
    }
  }
}
