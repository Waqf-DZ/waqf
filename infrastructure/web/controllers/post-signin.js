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
      req.logIn(user, function (err) {
        if (err) {
          return next(err)
        }
        if (user.isAdmin && user.isDirector) {
          return res.redirect('/admin')
        } else {
          return res.redirect('/profile')
        }
      })
    })(req, res, next)
  }
}
