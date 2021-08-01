module.exports = function makeDeleteUser({ usersDB }) {
  return async function deleteUser(userId) {
    let user = await usersDB.deleteUser(userId)
    return Promise.resolve(user ? user.id : null)
  }
}
