module.exports = function makeGetUserOrders({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const ownerId = 'hard-coded-id' // FIXME: remove this line and replace it with an actual ownerId
      const ordersList = await listOrders({ ownerId })
      res.render('admin/orders', { data: { orders: ordersList } })
    } catch (err) {
      res.render('admin/orders/new', { errorMessages: err.message })
    }
  }
}
