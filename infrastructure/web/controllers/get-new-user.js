module.exports = function makeGetNewUser() {
  return async function getNewUser(req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('admin/users/new', { successMessages, errorMessages })
  }
}
