module.exports = function makePostUser() {
  return async function (req, res) {
    res.render('signup')
  }
}
