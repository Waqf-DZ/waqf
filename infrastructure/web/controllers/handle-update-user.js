module.exports = function makeUpdateAdminUser({ updateUser, flashMessages }) {
  return async function handleUpdateUser(req, res) {
    try {
      const {
        displayName,
        phoneNumber,
        wilaya,
        city,
        description,
        role,
        isVerified,
      } = req.body
      const userInfo = {
        id: req.params.id,
        displayName,
        phoneNumber,
        wilaya,
        city,
        description,
        role,
        isVerified: isVerified == 'true',
      }
      await updateUser(userInfo)
      req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
      res.redirect('/users')
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
      res.redirect('/users')
    }
  }
}
