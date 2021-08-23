module.exports = function makeGetUserOrders({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const { id, isSeekingHelp, isAdmin } = req.user
      let ordersList = await listOrders({ ownerId: isSeekingHelp ? id : null })
      if (!isSeekingHelp && !isAdmin) {
        ordersList = ordersList.filter((o) => {
          return o.isPending || o.assignedUserId == id
        })
      }
      res.render('profile/orders/index', { data: { orders: ordersList } })
    } catch (err) {
      res.render('profile/orders/index', { errorMessages: [err.message] })
    }
  }
}
