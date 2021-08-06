module.exports = function makeGetUserDashboard() {
  return async function getUserDashboard(req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('profile/index', { successMessages, errorMessages })
  }
}
