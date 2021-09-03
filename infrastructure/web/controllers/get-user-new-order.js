module.exports = function makeGetUserNewOrder() {
  return async function getUserNewOrder(req, res) {
    res.render('orders/new')
  }
}
