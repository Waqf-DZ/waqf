module.exports = function makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
}) {
  return async function putUserSettings(req, res) {
    try {
      const { displayName, phoneNumber, description, city, wilaya } = req.body
      const updatedUser = await updateUser({
        id: req.user.id,
        displayName: sanitize(displayName),
        phoneNumber: sanitize(phoneNumber),
        description: sanitize(description),
        wilaya,
        city,
      })

      if (updatedUser) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/profile/settings')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/profile/settings')
      }
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
      res.redirect('/profile/settings')
    }
  }
}
