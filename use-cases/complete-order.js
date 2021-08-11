// @todo: create a test for this use case
module.exports = function makeCompleteOrder({ ordersDB, productsDB }) {
  return async function completeOrder({ orderId }) {
    const order = await ordersDB.getOrder(orderId)
    const product = await productsDB.getProduct(order.assignedProductId)
    order.markCompleted()
    product.markAvailable()
    ordersDB.updateOrder(order)
    productsDB.updateProduct(product)
    return Promise.resolve(order)
  }
}
