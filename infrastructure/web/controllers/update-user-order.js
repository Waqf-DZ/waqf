module.exports = function makeUpdateUserOrder({
  updateOrder,
  flashMessages,
  adjustUploadPath,
}) {
  return async function updateUserOrder(req, res) {
    const {
      patientName,
      patientAge,
      oxygenRatio,
      hasChronicDesease,
      isCovid,
      isHospitalized,
      wilaya,
      city,
      description,
    } = req.body

    const orderInfo = {
      id: req.params.id,
      ownerId: req.user.id,
      patientName: patientName,
      patientAge: patientAge,
      oxygenRatio: oxygenRatio,
      hasChronicDesease: hasChronicDesease == 'true',
      isCovid: isCovid == 'true',
      isHospitalized: isHospitalized,
      wilaya: wilaya,
      city: city,
      description: description,
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
