const { makeOrder } = require('../domain/index')

module.exports = function makeAddOrder({ ordersDB }) {
  return async function addOrder(orderInfo) {
    const order = makeOrder(orderInfo)
    await ordersDB.addOrder(order)
    return Promise.resolve(order)
  }
}
