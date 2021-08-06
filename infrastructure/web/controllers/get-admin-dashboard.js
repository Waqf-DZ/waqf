module.exports = function makeGetAdminDashboard() {
  return async function getAdminDashboard(req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('admin/index', { successMessages, errorMessages })
  }
}
