module.exports = function makePostSignIn({ flashMessages, passport }) {
  return async function (req, res, next) {
    passport.authenticate('local', function (err, user) {
      if (err) {
        return next(err)
      }
      if (!user) {
        req.flash('error', flashMessages.WRONG_CREDENTIALS)
        return res.redirect('/signin')
      }
      if (!user.isVerified) {
        req.flash('warning', flashMessages.NOT_VERIFIED_USER_SIGNIN)
        return res.redirect('/signin')
      }
      req.logIn(user, function (err) {
        if (err) return next(err)
        return res.redirect('/dashboard')
      })
    })(req, res, next)
  }
}
