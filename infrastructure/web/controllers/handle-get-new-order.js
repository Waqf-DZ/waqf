module.exports = function makeGetUserNewOrder() {
  return async function handleGetNewOrder(req, res) {
    res.render('orders/new')
  }
}
