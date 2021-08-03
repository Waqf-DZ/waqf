module.exports = function makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
}) {
  return async function postNewUser(req, res) {
    // NOTE: I GUESS THE PASSWORD FIELD IS MISSING FROM THE CLIENT
    const { name, phoneNumber, email, description, role, verified } = req.body
    if (
      !validator.isEmailValid(email) ||
      !validator.isPhoneValid(phoneNumber)
    ) {
      req.flash('error', flashMessages.INPUTS_NOT_VALID)
      res.redirect('/admin/users/new')
      return
    }
    const user = await addUser({
      name: sanitize(name),
      phoneNumber,
      email,
      description,
      role,
      verified,
    })
    if (!user) {
      req.flash('error', flashMessages.EMAIL_EXISTS)
      res.redirect('/admin/users/new')
      return
    } else {
      req.flash('success', flashMessages.SIGNUP_SUCCESSFUL_GIVER)
      res.redirect('/admin/users')
    }
  }
}
