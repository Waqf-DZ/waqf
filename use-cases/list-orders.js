module.exports = function makeListOrders({ ordersDB }) {
  return async function listOrders({ ownerId } = {}) {
    const list = ordersDB.listOrders({ ownerId })
    return Promise.resolve(list)
  }
}
