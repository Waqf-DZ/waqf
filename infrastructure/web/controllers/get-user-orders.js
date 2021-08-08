module.exports = function makeGetUserOrders({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const ownerId = req.user.id
      const ordersList = await listOrders({
        ownerId: req.user.isSeekingHelp ? ownerId : null,
      })
      res.render('profile/orders/index', { data: { orders: ordersList } })
    } catch (err) {
      res.render('profile/orders/index', { errorMessages: [err.message] })
    }
  }
}
