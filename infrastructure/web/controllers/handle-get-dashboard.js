module.exports = function makeHandleGetDashboard({
  listUsers,
  listOrders,
  listProducts,
}) {
  return async function handleGetDashboard(req, res) {
    const user = req.user
    const isAdmin = user.isAdmin
    const isGivingHelp = user.isGivingHelp
    try {
      const allUsers = isAdmin ? await listUsers() : []
      const totalAdmins = allUsers.filter((u) => u.isAdmin)
      const totalHelpGivers = allUsers.filter((u) => u.isGivingHelp)
      const totalHelpSeekers = allUsers.filter((u) => u.isSeekingHelp)
      const pendingUsers = allUsers.filter((u) => !u.isVerified)

      /* eslint-disable indent */
      const allProducts = isAdmin
        ? await listProducts()
        : isGivingHelp
        ? await listProducts({ ownerId: user.id })
        : []
      const availableProducts = allProducts.filter((o) => o.isAvailable)

      const ordersList =
        isAdmin || isGivingHelp
          ? await listOrders()
          : await listOrders({ ownerId: user.id })
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
      res.render('dashboard', { data: { statisticsData } })
    } catch (err) {
      res.render('dashboard')
    }
  }
}
