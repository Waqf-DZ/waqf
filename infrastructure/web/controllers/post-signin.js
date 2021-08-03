module.exports = function makePostUser({ signInUser, flashMessages }) {
  return async function _(req, res) {
    const { email, password } = req.body
    const user = await signInUser({
      email,
      password,
    })
    if (!user) {
      req.flash('error', flashMessages.WRONG_CREDENTIALS)
      res.redirect('/signup')
      return
    }
    if (user.isGivingHelp()) {
      res.redirect('/profile/products/new')
    } else if (user.isSeekingHelp()) {
      res.redirect('/profile/orders/new')
    }
  }
}
