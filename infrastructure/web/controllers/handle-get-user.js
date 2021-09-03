module.exports = function makeGetAdminUser({ getUser }) {
  return async function handleGetUser(req, res) {
    try {
      const userId = req.params.id
      const user = await getUser({ id: userId })
      res.render('users/_user-id', { data: { user } })
    } catch (err) {
      res.render('users/index', { errorMessages: [err.message] })
    }
  }
}
