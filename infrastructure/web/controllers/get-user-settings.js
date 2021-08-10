module.exports = function makeGetUserSettings() {
  return async function getUserSettings(req, res) {
    res.render('profile/settings')
  }
}
