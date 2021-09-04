function formatDate(date) {
  const parsedDate = new Date(date)
  return parsedDate
    ? parsedDate.toISOString().split('T')[0].split('-').reverse().join('-')
    : null
}

module.exports = function makeGetUserOrder({
  getOrder,
  getProduct,
  getUser,
  listProducts,
}) {
  return async function handleGetOrder(req, res) {
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
      const acceptedAt = formatDate(order.acceptedAt)
      const completedAt = formatDate(order.completedAt)
      const productFreeDays = assignedProduct?.freeDays
      const orderElapsedDays = order.isAccepted
        ? Math.round((Date.now() - order.acceptedAt) / 1000 / 3600 / 24)
        : null
      res.render('orders/_order-id', {
        acceptedAt,
        completedAt,
        order,
        orderOwner,
        assignedUserName: assignedUser?.displayName,
        products: availableProducts,
        daysLeft: productFreeDays - orderElapsedDays,
      })
    } catch (err) {
      console.error(err)
      res.redirect('/orders/')
    }
  }
}
