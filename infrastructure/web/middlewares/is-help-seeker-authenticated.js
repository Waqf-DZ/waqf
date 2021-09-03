module.exports = function (req, res, next) {
  const { user } = req
  if (user && user.id && user.isSeekingHelp) {
    res.locals.authenticatedUser = user
    next()
  } else {
    res.redirect('/dashboard')
  }
}
