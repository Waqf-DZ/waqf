const User = require('../domain/User')

function makeSignUpUser ({usersDB, getUniqueId, hashPassword}) {
  return async function signUpUser ({ username, email, password }) {
    let user = await usersDB.getUser({email})
    if (user) {
      return Promise.reject(null)
    } else {
      user = new User({
        id: getUniqueId(),
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