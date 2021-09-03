module.exports = function makeGetUserOrders({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const { id, isSeekingHelp, isGivingHelp } = req.user
      let ordersList = isSeekingHelp
        ? await listOrders({ ownerId: isSeekingHelp })
        : await listOrders()
      if (isGivingHelp) {
        ordersList = ordersList.filter((o) => {
          return o.isPending || o.assignedUserId == id
        })
      }
      res.render('orders/index', { data: { orders: ordersList } })
    } catch (err) {
      console.error(err)
      res.render('orders/index')
    }
  }
}
