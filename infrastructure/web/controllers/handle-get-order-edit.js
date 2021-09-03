module.exports = function makeGetUserOrderEdit({ getOrder }) {
  return async function handleGetOrderEdit(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      res.render('orders/edit', { order })
    } catch (err) {
      console.error(err)
      res.render('orders/')
    }
  }
}
