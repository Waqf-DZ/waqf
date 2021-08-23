module.exports = function makeGetAdminOrder({ getOrder }) {
  return async function getAdminOrder(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      res.render('admin/orders/_order-id', { data: { order } })
    } catch (err) {
      console.error(err)
      res.render('admin/orders/index')
    }
  }
}
