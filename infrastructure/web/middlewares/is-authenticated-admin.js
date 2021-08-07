module.exports = function (req, res, next) {
  const { user } = req
  if (user && (user.isAdmin || user.isDirector)) {
    res.locals.authenticatedUser = user
    next()
  } else {
    res.redirect('/signin')
  }
}
