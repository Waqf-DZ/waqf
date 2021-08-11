const { makeUser } = require('../domain/index')

module.exports = function makeUpdateUser({ usersDB }) {
  return async function updateUser(userInfo) {
    const oldUser = await usersDB.getUser({ id: userInfo.id })
    const user = makeUser(Object.assign({}, oldUser, userInfo))
    const updatedUser = await usersDB.updateUser(user)
    return Promise.resolve(updatedUser)
  }
}
