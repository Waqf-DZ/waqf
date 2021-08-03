module.exports = function makeGetUsers({ listUsers }) {
  return async function getUsers(req, res) {
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
