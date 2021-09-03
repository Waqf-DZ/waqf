module.exports = function makePostUserAcceptOrder({
  acceptOrder,
  flashMessages,
}) {
  return async function postUserAcceptOrder(req, res) {
    const assignedUserId = req.user.id
    const orderId = req.params.id
    const assignedProductId = req.body.productId
    try {
      await acceptOrder({ orderId, assignedUserId, assignedProductId })
      req.flash('success', flashMessages.ORDER_ACCEPT_SUCCESS)
      res.redirect(`/orders/${orderId}`)
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.ORDER_ACCEPT_FAILURE)
      res.redirect('/orders/')
    }
  }
}
