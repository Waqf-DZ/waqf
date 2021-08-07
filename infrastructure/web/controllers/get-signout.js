module.exports = function makeSignout() {
  return async function (req, res) {
    req.logOut()
    res.redirect('/')
  }
}
