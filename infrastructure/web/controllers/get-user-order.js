module.exports = function makeGetUserOrder({
  getOrder,
  getUser,
  listProducts,
}) {
  return async function getUserOrder(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      const orderOwner = await getUser({ id: order.ownerId })
      const products = req.user.isGivingHelp
        ? await listProducts({ ownerId: req.user.id })
        : []
      const availableProducts = products.filter((p) => p.isAvailable)
      res.render('profile/orders/_order-id', {
        data: { order, orderOwner, products: availableProducts },
      })
    } catch (err) {
      res.render('profile/orders/', { errorMessages: err.message })
    }
  }
}
