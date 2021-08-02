module.exports = function makePostUser() {
  return async function (req, res) {
    const successMessages = req.flash('success')
    const errorMessages = req.flash('error')
    res.render('signup', { successMessages, errorMessages })
  }
}
