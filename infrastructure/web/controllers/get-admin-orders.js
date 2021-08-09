module.exports = function makeGetAdminOrders({ listOrders }) {
  return async function getAdminOrders(req, res) {
    try {
      const orderId = req.params.id
      if (orderId) {
        getAdminOrderById(req, res, listOrders, orderId)
      } else {
        const ownerId = req.user.id

        const ordersList = await listOrders({ ownerId })
        res.render('admin/orders/index', { data: { orders: ordersList } })
      }
    } catch (err) {
      res.render('admin/orders/new', { errorMessages: [err.message] })
    }
  }
}

// NOTE: THIS METHOD CAN BE MOVED LATER TO A SEPRATE CONTROLLER
async function getAdminOrderById(req, res, listOrders, orderId) {
  try {
    const ordersList = await listOrders()
    const order = ordersList.filter((order) => order.id == orderId)[0]

    res.render('admin/orders/_order-id', { data: { order } })
  } catch (err) {
    res.render('admin/orders/', { errorMessages: [err.message] })
  }
}
