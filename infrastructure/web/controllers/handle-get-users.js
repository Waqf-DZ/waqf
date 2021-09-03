module.exports = function makeGetUsers({ listUsers }) {
  return async function handleGetUsers(req, res) {
    try {
      const usersList = await listUsers()
      res.render('users/index', {
        data: { users: usersList },
      })
    } catch (err) {
      console.log(err)
      res.render('users/index')
    }
  }
}
