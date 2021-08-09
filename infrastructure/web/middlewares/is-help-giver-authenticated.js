module.exports = function (req, res, next) {
  const { user } = req
  if (user && user.id && user.isGivingHelp) {
    res.locals.authenticatedUser = user
    next()
  } else {
    res.redirect('/profile')
  }
}
