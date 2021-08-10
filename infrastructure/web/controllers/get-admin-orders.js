module.exports = function makeGetAdminOrders({ listOrders }) {
  return async function getAdminOrders(req, res) {
    try {
      const ownerId = req.user.id

      const ordersList = await listOrders({ ownerId })
      res.render('admin/orders/index', { data: { orders: ordersList } })
    } catch (err) {
      res.render('admin/orders/index', { errorMessages: [err.message] })
    }
  }
}
