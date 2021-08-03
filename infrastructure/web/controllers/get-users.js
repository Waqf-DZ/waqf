module.exports = function usersList({ listUsers }) {
  return async function getUsersList(req, res) {
    try {
      const usersList = await listUsers()
      res.render('/admin/users', {
        data: { users: usersList },
      })
    } catch (err) {
      res.render('/admin/users', {
        errorMessages: err.message,
      })
    }
  }
}
