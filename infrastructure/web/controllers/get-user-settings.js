module.exports = function makeGetUserSettings() {
  return async function getUserSettings(req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('profile/settings', { successMessages, errorMessages })
  }
}
