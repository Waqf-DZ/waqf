module.exports = function makePostUser({ addUser, flashMessages }) {
  return async function postUser(req, res) {
    console.log(req.body)
    const { email, password, displayName, phoneNumber, role } = req.body
    const user = await addUser({
      email,
      password,
      displayName,
      role,
      phoneNumber,
    })
    if (!user) {
      req.flash('error', flashMessages.EMAIL_EXISTS)
      res.redirect('/signup')
      return
    }
    if (user.isGivingHelp()) {
      req.flash('success', flashMessages.SIGNUP_SUCCESSFUL_SEEKER)
      res.redirect('/profile/products/new')
    } else if (user.isSeekingHelp()) {
      req.flash('success', flashMessages.SIGNUP_SUCCESSFUL_GIVER)
      res.redirect('/profile/orders/new')
    }
  }
}
