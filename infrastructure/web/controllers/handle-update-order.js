module.exports = function makeUpdateUserOrder({
  updateOrder,
  flashMessages,
  adjustUploadPath,
}) {
  return async function handleUpdateOrder(req, res) {
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
      isHospitalized: isHospitalized == 'true',
      wilaya: wilaya,
      city: city,
      description: description,
    }
    if (req.file) {
      orderInfo.prescriptionUrl = adjustUploadPath(req.file.path)
    }

    try {
      await updateOrder(orderInfo)
      req.flash('success', flashMessages.ORDER_UPDATE_SUCCESS)
      res.redirect('/orders')
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.ORDER_UPDATE_FAILURE)
      res.redirect('/orders')
    }
  }
}
