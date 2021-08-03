module.exports = function makeGetAdminOrders({ listOrders }) {
  return async function getAdminOrders(req, res) {
    try {
      const { ownerId } = req.body
      const ordersList = await listOrders({ ownerId })
      res.render('/admin/orders', { data: { orders: ordersList } })
    } catch (err) {
      res.render('/admin/orders/new', { errorMessages: err.message })
    }
  }
}
