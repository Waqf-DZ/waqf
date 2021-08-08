const { makeOrder } = require('../domain/index')

module.exports = function makeUpdateOrder({ ordersDB, getOrder }) {
  return async function updateOrder(orderInfo) {
    const oldOrder = await getOrder(orderInfo.id)
    const order = makeOrder(Object.assign({}, oldOrder, orderInfo))
    console.log({ order })
    const updatedOrder = await ordersDB.updateOrder(order)
    return updatedOrder
  }
}
