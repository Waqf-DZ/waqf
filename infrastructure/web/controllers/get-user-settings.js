module.exports = function makeGetUserSettings({ getUser }) {
  return async function getUserSettings(req, res) {
    try {
      const ownerId = req.user.id
      const user = await getUser({ id: ownerId })
      res.render('settings', { data: { user } })
    } catch (err) {
      res.render('settings', { errorMessages: [err.message] })
    }
  }
}
