module.exports = function makePostUser({
  addUser,
  updateUser,
  flashMessages,
  sanitize,
  validator,
}) {
  return async function postUser(req, res) {
    const { email, password, displayName, phoneNumber, role } = req.body
    if (
      !validator.isEmailValid(email) ||
      !validator.isPhoneValid(phoneNumber)
    ) {
      req.flash('error', flashMessages.INPUTS_NOT_VALID)
      res.redirect('/signup')
      return
    }
    const user = await addUser({
      email,
      password,
      displayName: sanitize(displayName),
      role,
      phoneNumber,
    })
    if (user.isSeekingHelp) {
      user.verify()
      await updateUser(user)
    }
    if (!user.isVerified) {
      req.flash('warning', flashMessages.NOT_VERIFIED_USER_SIGNIN)
      return res.redirect('/signup')
    }
    if (!user) {
      req.flash('error', flashMessages.EMAIL_EXISTS)
      res.redirect('/signup')
      return
    }
    if (user.isGivingHelp) {
      req.logIn(user, () => {
        req.flash('success', flashMessages.SIGNUP_SUCCESSFUL_SEEKER)
        res.redirect('/products/new')
      })
    } else if (user.isSeekingHelp) {
      req.logIn(user, () => {
        req.flash('success', flashMessages.SIGNUP_SUCCESSFUL_GIVER)
        res.redirect('/orders/new')
      })
    }
  }
}
