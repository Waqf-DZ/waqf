const { makeUser } = require('../domain/index')

function makeSignUpUser({ usersDB, hashPassword }) {
  return async function signUpUser({ username, email, password }) {
    let user = await usersDB.getUser({ email })
    if (user) {
      return Promise.reject(null)
    } else {
      user = makeUser({
        username,
        email,
        passwordHash: hashPassword(password),
      })
      await usersDB.addUser(user)
      return Promise.resolve(user)
    }
  }
}

module.exports = makeSignUpUser
