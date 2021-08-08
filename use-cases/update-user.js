module.exports = function makeUpdateUser({ usersDB }) {
  return async function updateUser({ email, name, phoneNumber }) {
    const updatedUser = await usersDB.updateUser({
      email,
      name,
      phoneNumber,
    })
    return updatedUser
  }
}
