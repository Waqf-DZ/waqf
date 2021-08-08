module.exports = function makeUpdateUserOrder({ updateOrder, flashMessages }) {
  return async function updateUserOrder(req, res) {
    try {
      const orderId = req.query.id
      const userParams = req.body
      const imageFile = req.file
      if (imageFile) {
        userParams.prescriptionUrl = imageFile.path
      }

      const updatedOrder = await updateOrder({ orderId, userParams })

      if (updatedOrder) {
        req.flash('success', flashMessages.ORDER_UPDATE_SUCCESS)
        res.redirect('orders')
      }
    } catch (err) {
      res.render('profile/orders/index', { errorMessages: [err.message] })
    }
  }
}
