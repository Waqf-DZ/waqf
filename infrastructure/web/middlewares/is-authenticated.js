module.exports = function (req, res, next) {
  const { user } = req
  if (user && user.id) {
    res.locals.authenticatedUser = user
    next()
  } else {
    res.redirect('/signin')
  }
}
