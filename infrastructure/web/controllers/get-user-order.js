module.exports = function makeGetUserOrder({ getOrder, listProducts }) {
  return async function getUserOrder(req, res) {
    try {
      const ownerId = req.user.id
      const orderId = req.params.id
      const order = await getOrder(orderId)
      const products = req.user.isGivingHelp
        ? await listProducts({ ownerId })
        : []
      res.render('profile/orders/_order-id', { data: { order, products } })
    } catch (err) {
      res.render('profile/orders/', { errorMessages: err.message })
    }
  }
}
