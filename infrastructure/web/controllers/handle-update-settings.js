module.exports = function makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
}) {
  return async function handleUpdateSettings(req, res) {
    try {
      const { displayName, phoneNumber, description, city, wilaya } = req.body
      await updateUser({
        id: req.user.id,
        displayName: sanitize(displayName),
        phoneNumber: sanitize(phoneNumber),
        description: sanitize(description),
        wilaya,
        city,
      })

      req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
      res.redirect('/settings')
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
      res.redirect('/settings')
    }
  }
}
