module.exports = function (req, res, next) {
  res.locals.errorMessages = req.flash('error')
  res.locals.warningMessages = req.flash('warning')
  res.locals.successMessages = req.flash('success')
  next()
}
