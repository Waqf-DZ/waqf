module.exports = function makePostUserNewOrder({
  addOrder,
  flashMessages,
  sanitize,
}) {
  return async function postUserNewOrder(req, res) {
    try {
      const ownerId = 'hard-coded-id' // FIXME: remove this line and replace it with an actual ownerId
      const {
        patientName,
        patientAge,
        oxygenRatio,
        hasChronicDesease,
        isCovid,
      } = req.body
      const prescriptionUrl = req.file.path

      // make an early check for the rquired fileds
      if (!ownerId || !patientAge || !patientAge || !oxygenRatio) {
        req.flash('error', flashMessages.INPUTS_NOT_VALID)
        res.redirect('/profile/orders/new')
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
      })

      if (newOrder) {
        req.flash('success', flashMessages.NEW_ORDER_SUCCESS)
        res.redirect('/profile/orders')
        return
      } else {
        req.flash('error', flashMessages.NEW_ORDER_FAILURE)
        res.redirect('/profile/orders/new')
      }
    } catch (err) {
      req.flash('error', err.message)
      res.redirect('/profile/orders/new')
    }
  }
}
