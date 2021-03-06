module.exports = function makePostUserNewOrder({
  addOrder,
  flashMessages,
  sanitize,
  adjustUploadPath,
}) {
  return async function handleCreateOrder(req, res) {
    try {
      const ownerId = req.user.id
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
      const imageFile = req.file
      const prescriptionUrl = imageFile
        ? adjustUploadPath(imageFile.path)
        : undefined

      // make an early check for the rquired fileds
      if (!ownerId || !patientAge || !patientAge || !oxygenRatio) {
        req.flash('error', flashMessages.INPUTS_NOT_VALID)
        res.redirect('/orders/new')
        return
      }

      const newOrder = await addOrder({
        ownerId,
        patientName: sanitize(patientName),
        patientAge,
        oxygenRatio,
        hasChronicDesease,
        isCovid,
        prescriptionUrl,
        isHospitalized,
        wilaya,
        city,
        description,
      })

      if (newOrder) {
        req.flash('success', flashMessages.NEW_ORDER_SUCCESS)
        res.redirect('/orders')
        return
      } else {
        req.flash('error', flashMessages.NEW_ORDER_FAILURE)
        res.redirect('/orders/new')
      }
    } catch (err) {
      req.flash('error', err.message)
      res.redirect('/orders/new')
    }
  }
}
