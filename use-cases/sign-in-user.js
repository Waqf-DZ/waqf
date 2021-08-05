module.exports = function makeSignInUser({ getUser, hashPassword }) {
  return async function signInUser({ email, password }) {
    const hashedPassword = hashPassword(password)
    const user = await getUser({ email })
    if (user && user.passwordHash == hashedPassword) {
      return Promise.resolve(user)
    } else {
      return Promise.resolve(null)
    }
  }
}
