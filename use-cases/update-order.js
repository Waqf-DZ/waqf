module.exports = function makeUpdateOrder({ usersDB }) {
  return async function updateOrder({ orderId, userParams }) {
    const updatedOrder = await usersDB.updateOrder({
      orderId,
      userParams,
    })
    return updatedOrder
  }
}
