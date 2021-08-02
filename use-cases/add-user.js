const { makeUser } = require('../domain/index')

function makeAddUser({ usersDB, hashPassword }) {
  return async function addUser({
    displayName,
    email,
    password,
    phoneNumber,
    role,
  }) {
    let user = await usersDB.getUser({ email })
    if (user) {
      return Promise.reject(null)
    } else {
      user = makeUser({
        displayName,
        email,
        passwordHash: hashPassword(password),
        phoneNumber,
        role,
      })
      await usersDB.addUser(user)
      return Promise.resolve(user)
    }
  }
}

module.exports = makeAddUser
