module.exports = function getUsersList({ listUsers }) {
  return async function usersList(req, res) {
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
