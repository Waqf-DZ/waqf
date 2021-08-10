module.exports = function makeGetNewUser() {
  return async function getNewUser(req, res) {
    res.render('admin/users/new')
  }
}
