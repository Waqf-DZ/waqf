module.exports = function makeGetUserOrder({
  getOrder,
  getProduct,
  getUser,
  listProducts,
}) {
  return async function getUserOrder(req, res) {
    try {
      const orderId = req.params.id
      const order = await getOrder(orderId)
      const orderOwner = await getUser({ id: order.ownerId })
      const assignedUser = order.assignedUserId
        ? await getUser({ id: order.assignedUserId })
        : null
      const assignedProduct = order.assignedProductId
        ? await getProduct(order.assignedProductId)
        : null
      const products = req.user.isGivingHelp
        ? await listProducts({ ownerId: req.user.id })
        : []
      const availableProducts = products.filter((p) => p.isAvailable)
      const acceptedAt = new Date(order.acceptedAt).toISOString().split('T')[0]
      const productFreeDays = assignedProduct?.freeDays
      const orderElapsedDays = order.isAccepted
        ? Math.round((Date.now() - order.acceptedAt) / 1000 / 3600 / 24)
        : null
      res.render('admin/orders/_order-id', {
        acceptedAt,
        order,
        orderOwner,
        assignedUserName: assignedUser?.displayName,
        products: availableProducts,
        daysLeft: productFreeDays - orderElapsedDays,
      })
    } catch (err) {
      console.error(err)
      res.redirect('/admin/orders/')
    }
  }
}
