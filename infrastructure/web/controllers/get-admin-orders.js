module.exports = function getAdminOrders({ listOfOrders }) {
  return async function (req, res) {
    try {
      const { ownerId } = req.body
      const ordersList = await listOfOrders({ ownerId })
      res.render('/admin/orders', { data: { orders: ordersList } })
    } catch (err) {
      res.render('/admin/orders/new', { errorMessages: err.message })
    }
  }
}
