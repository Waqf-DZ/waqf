module.exports = function makeUpdateUser({ usersDB }) {
  return async function updateUser({ email, name, phoneNumber }) {
    let userToUpdate = await usersDB.getUser({ email })
    if (!userToUpdate) {
      return Promise.resolve(null)
    } else {
      const updatedUser = await usersDB.updateUser({
        updatedUser: userToUpdate,
        email,
        name,
        phoneNumber,
      })
      return Promise.resolve(updatedUser)
    }
  }
}
