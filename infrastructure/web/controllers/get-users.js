module.exports = function makeGetUsers({ listUsers }) {
  return async function getUsers(req, res) {
    try {
      const usersList = await listUsers()
      res.render('admin/users/index', {
        data: { users: usersList },
      })
    } catch (err) {
      console.log(err)
      res.render('admin/users/index')
    }
  }
}
