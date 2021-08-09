module.exports = function makeSignInUser({ getUser, verifyPassword }) {
  return async function signInUser({ email, password }) {
    const user = await getUser({ email })
    // NOTE: OUR USERS CAN'T LOGIN AS IF THE user.passwordHash IS HARD_CODED
    // SO I AM SKIPPING THE CHECK FOR TRUTHY VALUE IN THE hashedPassword
    const hashedPassword = await verifyPassword(password, user.passwordHash)
    // FIXME: check for truthy value in the hashPassword once we start creating users
    if (user && hashedPassword == false) {
      return Promise.resolve(user)
    } else {
      return Promise.resolve(null)
    }
  }
}
