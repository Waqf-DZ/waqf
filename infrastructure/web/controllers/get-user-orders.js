module.exports = function makeGetUserOrders({ listOrders }) {
  return async function getUserOrders(req, res) {
    try {
      const orderId = req.params.id
      if (orderId) {
        getUserOrderById(req, res, listOrders, orderId)
      } else {
        // FIXME: THE USER_ID IS UNDEFINED FOR THE TIME BEIGN, SO WE ARE USING A HARD_CODED_ID
        const user = req.user
        const ownerId = user ? user.id : 'user_1'

        const ordersList = await listOrders({ ownerId })
        res.render('profile/orders/index', { data: { orders: ordersList } })
      }
    } catch (err) {
      res.render('profile/orders/index', { errorMessages: [err.message] })
    }
  }
}

// NOTE: THIS METHOD CAN BE MOVED LATER TO A SEPRATE CONTROLLER
async function getUserOrderById(req, res, listOrders, orderId) {
  try {
    const ordersList = await listOrders()
    const order = ordersList.filter((order) => order.id == orderId)[0]

    res.render('profile/orders/_order-id', { data: { order } })
  } catch (err) {
    res.render('profile/orders/', { errorMessages: err.message })
  }
}
