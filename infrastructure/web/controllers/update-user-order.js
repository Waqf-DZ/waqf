module.exports = function makeUpdateUserOrder({
  updateOrder,
  flashMessages,
  adjustUploadPath,
}) {
  return async function updateUserOrder(req, res) {
    const orderInfo = {
      id: req.params.id,
      ownerId: req.user.id,
      patientName: req.body.patientName,
      patientAge: req.body.patientAge,
      oxygenRatio: req.body.oxygenRatio,
      hasChronicDesease: req.body.hasChronicDesease == 'true',
      isCovid: req.body.isCovid == 'true',
    }
    if (req.file) {
      orderInfo.prescriptionUrl = adjustUploadPath(req.file.path)
    }
    const updatedOrder = await updateOrder(orderInfo)

    if (updatedOrder) {
      req.flash('success', flashMessages.ORDER_UPDATE_SUCCESS)
      res.redirect('/profile/orders')
    }
  }
}
