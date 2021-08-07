module.exports = function makeGetUserDashboard({ listProducts, listOrders }) {
  return async function getUserDashboard(req, res) {
    try {
      // NOTE: THIS CODE IS DUPLICATED IN THE getAdminDashboard controller

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
      res.render('profile/index', { data: { successMessages, statisticsData } })
    } catch (err) {
      const errorMessages = req.flash('error')
      res.render('profile/index', { errorMessages })
    }
  }
}
