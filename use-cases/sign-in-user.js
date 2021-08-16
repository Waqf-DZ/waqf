module.exports = function makeSignInUser({ getUser, verifyPassword }) {
  return async function signInUser({ email, password }) {
    const user = await getUser({ email })
    if (!user) return Promise.resolve(null)
    const isPasswordValid = await verifyPassword(password, user.passwordHash)
    if (user && isPasswordValid) {
      return Promise.resolve(user)
    }
    return Promise.resolve(null)
  }
}
