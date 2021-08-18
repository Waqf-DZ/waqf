module.exports = function makeGetAdminDashboard({
  listUsers,
  listOrders,
  listProducts,
}) {
  return async function getAdminDashboard(req, res) {
    try {
      const allUsers = await listUsers()
      const totalAdmins = allUsers.filter((u) => u.isAdmin)
      const totalHelpGivers = allUsers.filter((u) => u.isGivingHelp)
      const totalHelpSeekers = allUsers.filter((u) => u.isSeekingHelp)
      const pendingUsers = allUsers.filter((u) => !u.isVerified)

      const allProducts = await listProducts()
      const availableProducts = allProducts.filter((o) => o.isAvailable)

      const ordersList = await listOrders()
      const totalNewOrders = ordersList.filter((o) => o.isPending)
      const acceptedOrders = ordersList.filter((o) => o.isAccepted)
      const completedOrders = ordersList.filter((o) => o.isCompleted)

      let statisticsData = {
        users: {
          totalUsers: allUsers.length,
          totalAdmins: totalAdmins.length,
          totalHelpGivers: totalHelpGivers.length,
          totalHelpSeekers: totalHelpSeekers.length,
          totalPendingUsers: pendingUsers.length,
        },
        products: {
          totalProducts: allProducts.length,
          totalAvailableProducts: availableProducts.length,
          totalLendedProducts: allProducts.length - availableProducts.length,
        },
        orders: {
          totalOrders: ordersList.length,
          totalNewOrders: totalNewOrders.length,
          totalAcceptedOrders: acceptedOrders.length,
          totalCompletedOrders: completedOrders.length,
        },
      }
      res.render('admin/index', { data: { statisticsData } })
    } catch (err) {
      res.render('admin/index', { errorMessages: [err.message] })
    }
  }
}
