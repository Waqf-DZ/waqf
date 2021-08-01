module.exports = function makeDeleteOrder({ ordersDB }) {
  return async function deleteOrder(orderId) {
    let order = await ordersDB.deleteOrder(orderId)
    return Promise.resolve(order ? order.id : null)
  }
}
