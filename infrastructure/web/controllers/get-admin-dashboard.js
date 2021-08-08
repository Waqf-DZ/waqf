module.exports = function makeGetAdminDashboard({
  listUsers,
  listOrders,
  listProducts,
}) {
  return async function getAdminDashboard(req, res) {
    try {
      // users statistics /////////////////////////////////////////////
      const usersList = await listUsers()
      const registeredAssociations = usersList.filter(
        (user) => user.role == 'GIVING_HELP'
      )
      const totalBeneficiaries = usersList.filter(
        (user) => user.role == 'SEEKING_HELP'
      )
      const pendingUsers = usersList.filter((user) => user.isVerified == false)
      const missionProgress = (pendingUsers.length / usersList.length) * 100

      // products statistics //////////////////////////////////////////
      const productsList = await listProducts()
      const availableDevices = productsList.filter(
        (product) => product.isAvailable
      )
      const borrowedDevices = productsList.filter(
        (product) => !product.isAvailable
      )
      const availability = Math.floor(
        (availableDevices.length / productsList.length) * 100
      )

      // orders statistics ////////////////////////////////////////////
      const ordersList = await listOrders()
      const totalNewOrders = ordersList.filter((order) => {
        const hour = 60000 * 60
        const twoDays = hour * 48
        const now = Date.now()
        return order.createdAt - twoDays < now
      })
      const fulfilledOrders = ordersList.filter(
        (order) => order.status == 'COMPLETED'
      )

      // FIXME: statisticsData will be replaced with real stats later
      let statisticsData = {
        users: {
          totalUsers: usersList.length,
          registeredAssociations: registeredAssociations.length,
          totalBeneficiaries: totalBeneficiaries.length,
          pendingUsers: pendingUsers.length,
          missionProgress, // percentage
        },
        products: {
          totalDevices: productsList.length,
          availableDevices: availableDevices.length,
          borrowedDevices: borrowedDevices.length,
          availability, // percentage
        },
        orders: {
          totalOrders: ordersList.length,
          totalNewOrders: totalNewOrders.length,
          fulfilledOrders: fulfilledOrders.length,
          averageOrders: 9,
        },
      }

      const successMessages = req.flash('success')
      res.render('admin/index', { data: { successMessages, statisticsData } })
    } catch (err) {
      res.render('admin/index', { errorMessages: [err.message] })
    }
  }
}
