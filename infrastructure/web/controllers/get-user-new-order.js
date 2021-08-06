module.exports = function makeGetUserNewOrder() {
  return async function getUserNewOrder(req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('profile/orders/new', { successMessages, errorMessages })
  }
}
