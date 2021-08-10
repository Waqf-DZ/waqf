module.exports = function makeUpdateAdminUser({ updateUser, flashMessages }) {
  return async function updateAdminUser(req, res) {
    try {
      const userInfo = {
        id: req.params.id,
        ...req.body,
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
      res.render('admin/users/index', { errorMessages: [err.message] })
    }
  }
}
