module.exports = function makeUpdateAdminUser({ updateUser, flashMessages }) {
  return async function updateAdminUser(req, res) {
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
      const updatedUser = await updateUser(userInfo)
      if (updatedUser) {
        req.flash('success', flashMessages.PROFILE_UPDATE_SUCCESS)
        res.redirect('/admin/users')
      } else {
        req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
        res.redirect('/admin/users')
      }
    } catch (err) {
      console.error(err)
      req.flash('error', flashMessages.PROFILE_UPDATE_FAILURE)
      res.redirect('/admin/users')
    }
  }
}
