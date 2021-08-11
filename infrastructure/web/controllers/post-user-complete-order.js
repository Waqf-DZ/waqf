module.exports = function makePostUserCompleteOrder({
  completeOrder,
  flashMessages,
}) {
  return async function postUserCompleteOrder(req, res) {
    const orderId = req.params.id
    try {
      await completeOrder({ orderId })
      req.flash('success', flashMessages.ORDER_COMPLETE_SUCCESS)
      res.redirect(`/profile/orders/${orderId}`)
    } catch (err) {
      console.log(err)
      req.flash('error', flashMessages.ORDER_COMPLETE_FAILURE)
      res.redirect(`/profile/orders/${orderId}`)
    }
  }
}
