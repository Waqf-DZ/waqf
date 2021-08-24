module.exports = function makeGetAdminOrder({ getOrder, getUser }) {
  return async function getAdminOrder(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      const orderOwner = await getUser({ id: order.ownerId })
      res.render('admin/orders/_order-id', { data: { order, orderOwner } })
    } catch (err) {
      console.error(err)
      res.render('admin/orders/index')
    }
  }
}
