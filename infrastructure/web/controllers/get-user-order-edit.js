module.exports = function makeGetUserOrderEdit({ getOrder }) {
  return async function getUserOrderEdit(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      res.render('profile/orders/edit', { order })
    } catch (err) {
      console.error(err)
      res.render('profile/orders/')
    }
  }
}
