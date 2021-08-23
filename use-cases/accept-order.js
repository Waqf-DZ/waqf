// @todo: create a test for this use case
module.exports = function makeAcceptOrder({ ordersDB, productsDB }) {
  return async function acceptOrder({
    orderId,
    assignedUserId,
    assignedProductId,
  }) {
    const order = await ordersDB.getOrder(orderId)
    if (order.isPending) {
      const product = await productsDB.getProduct(assignedProductId)
      order.assignUserId(assignedUserId)
      order.assignProductId(assignedProductId)
      order.markAccepted()
      product.markNotAvailable()
      ordersDB.updateOrder(order)
      productsDB.updateProduct(product)
      return Promise.resolve(order)
    } else {
      throw new Error('order is not pending and can not be accepted')
    }
  }
}
