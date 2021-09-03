module.exports = function makePostUserCompleteOrder({
  completeOrder,
  flashMessages,
}) {
  return async function handleCompleteOrder(req, res) {
    const orderId = req.params.id
    try {
      await completeOrder({ orderId })
      req.flash('success', flashMessages.ORDER_COMPLETE_SUCCESS)
      res.redirect(`/orders/${orderId}`)
    } catch (err) {
      console.log(err)
      req.flash('error', flashMessages.ORDER_COMPLETE_FAILURE)
      res.redirect(`/orders/${orderId}`)
    }
  }
}
