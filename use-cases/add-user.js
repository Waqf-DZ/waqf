const { makeUser } = require('../domain/index')

function makeAddUser({ usersDB, hashPassword }) {
  return async function addUser({
    displayName,
    email,
    password,
    phoneNumber,
    description,
    role,
  }) {
    let user = await usersDB.getUser({ email })
    if (user) {
      return Promise.resolve(null)
    } else {
      const passwordHash = await hashPassword(password)
      user = makeUser({
        displayName,
        email,
        passwordHash,
        phoneNumber,
        description,
        role,
      })
      await usersDB.addUser(user)
      return Promise.resolve(user)
    }
  }
}

module.exports = makeAddUser
