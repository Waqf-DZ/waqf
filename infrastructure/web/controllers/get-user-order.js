module.exports = function makeGetUserOrder({ getOrder }) {
  return async function getUserOrder(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      res.render('profile/orders/_order-id', { data: { order } })
    } catch (err) {
      res.render('profile/orders/', { errorMessages: err.message })
    }
  }
}
