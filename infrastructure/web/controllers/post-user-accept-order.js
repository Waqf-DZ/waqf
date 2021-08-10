module.exports = function makePostUserAcceptOrder({
  acceptOrder,
  flashMessages,
}) {
  return async function postUserAcceptOrder(req, res) {
    const assignedUserId = req.user.id
    const orderId = req.params.id
    const assignedProductId = req.body.productId
    await acceptOrder({ orderId, assignedUserId, assignedProductId })
    req.flash('success', flashMessages.ORDER_ACCEPT_SUCCESS)
    res.redirect(`/profile/orders/${orderId}`)
  }
}
