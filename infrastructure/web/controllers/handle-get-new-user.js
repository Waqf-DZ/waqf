module.exports = function makeGetNewUser() {
  return async function handleGetNewUser(req, res) {
    res.render('users/new')
  }
}
