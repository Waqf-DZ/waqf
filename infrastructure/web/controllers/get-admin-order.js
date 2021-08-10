module.exports = function makeGetAdminOrder({ listOrders }) {
  return async function getAdminOrder(req, res) {
    try {
      const orderId = req.params.id
      const ordersList = await listOrders()
      const order = ordersList.filter((order) => order.id == orderId)[0]

      res.render('admin/orders/_order-id', { data: { order } })
    } catch (err) {
      res.render('admin/orders/index', { errorMessages: [err.message] })
    }
  }
}
