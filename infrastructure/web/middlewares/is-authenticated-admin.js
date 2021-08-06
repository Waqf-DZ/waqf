module.exports = function (req, res, next) {
  const { user } = req
  if (user && user.isAdmin && user.isDirector) {
    next()
  } else {
    res.redirect('/signin')
  }
}
