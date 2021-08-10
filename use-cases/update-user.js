const makeUser = require('../domain/makeUser')

module.exports = function makeUpdateUser({ usersDB, getUser }) {
  return async function updateUser(userInfo) {
    const oldUser = await getUser({ id: userInfo.id })
    const user = makeUser(Object.assign({}, oldUser, userInfo))
    const updatedUser = await usersDB.updateUser(user)
    return Promise.resolve(updatedUser)
  }
}
