module.exports = function makeGetUserOrder({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const orderId = req.params.id
      const ordersList = await listOrders()
      const order = ordersList.filter((order) => order.id == orderId)[0]

      res.render('profile/orders/_order-id', { data: { order } })
    } catch (err) {
      res.render('profile/orders/', { errorMessages: [err.message] })
    }
  }
}
