module.exports = function makeUpdateAdminOrder({
  updateOrder,
  flashMessages,
  adjustUploadPath,
}) {
  return async function updateAdminOrder(req, res) {
    const orderInfo = {
      id: req.params.id,
      ownerId: req.user.id,
      ...req.body,
    }
    orderInfo.prescriptionUrl = req.file
      ? adjustUploadPath(req.file.path)
      : null

    const updatedOrder = await updateOrder(orderInfo)

    if (updatedOrder) {
      req.flash('success', flashMessages.ORDER_UPDATE_SUCCESS)
      res.redirect('/admin/orders')
    }
  }
}
