module.exports = function makeUpdateUserOrder({ updateOrder, flashMessages }) {
  return async function updateUserOrder(req, res) {
    const orderInfo = {
      id: req.params.id,
      ownerId: req.user.id,
      ...req.body,
    }
    if (req.file) {
      orderInfo.prescriptionUrl = req.file.path
    }

    const updatedOrder = await updateOrder(orderInfo)

    if (updatedOrder) {
      req.flash('success', flashMessages.ORDER_UPDATE_SUCCESS)
      res.redirect('/profile/orders')
    }
  }
}
