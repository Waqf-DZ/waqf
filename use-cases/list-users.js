module.exports = function makeListUsers({ usersDB }) {
  return async function listUsers() {
    const list = usersDB.listUsers()
    return Promise.resolve(list)
  }
}
