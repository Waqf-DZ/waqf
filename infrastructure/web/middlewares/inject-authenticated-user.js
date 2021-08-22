module.exports = function (req, res, next) {
  const { user } = req
  if (user) {
    res.locals.authenticatedUser = user
  }
  next()
}
