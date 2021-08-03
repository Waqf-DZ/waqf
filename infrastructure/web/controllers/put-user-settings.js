module.exports = function makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
}) {
  return async function putUserSettings(req, res) {
    try {
      const { email, name, phoneNumber } = req.body
      const updatedUser = await updateUser({
        email,
        name: sanitize(name),
        phoneNumber,
      })

      if (updatedUser) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/profile')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/profile/products/new')
      }
    } catch (err) {
      res.render('/profile/settings', { errorMessages: err.message })
    }
  }
}
