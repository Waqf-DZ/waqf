module.exports = function makeGetUserDashboard({ listProducts, listOrders }) {
  return async function getUserDashboard(req, res) {
    try {
      const ownerId = req.user.id
      const allProducts = await listProducts({ ownerId })
      const availableProducts = allProducts.filter((o) => o.isAvailable)

      const allOrders = await listOrders({ ownerId })
      const totalNewOrders = allOrders.filter((o) => o.isPending)
      const acceptedOrders = allOrders.filter((o) => o.isAccepted)
      const completedOrders = allOrders.filter((o) => o.isCompleted)

      let statisticsData = {
        products: {
          totalProducts: allProducts.length,
          totalAvailableProducts: availableProducts.length,
          totalLendedProducts: allProducts.length - availableProducts.length,
        },
        orders: {
          totalOrders: allOrders.length,
          totalNewOrders: totalNewOrders.length,
          totalAcceptedOrders: acceptedOrders.length,
          totalCompletedOrders: completedOrders.length,
        },
      }
      res.render('profile/index', { data: { statisticsData } })
    } catch (err) {
      res.render('profile/index', { errorMessages: [err.message] })
    }
  }
}
