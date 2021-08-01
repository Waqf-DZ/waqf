module.exports = function makeGetOrder({ ordersDB }) {
  return async function getOrder(orderId) {
    let order = await ordersDB.getOrder(orderId)
    return Promise.resolve(order || null)
  }
}
