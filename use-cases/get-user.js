module.exports = function makeGetUser({ usersDB }) {
  return async function getUser({ id, email }) {
    if (id && email) throw new Error('Can not get user with both id and email')
    if (!id && !email) throw new Error('id or email are required')
    const user = await usersDB.getUser({ id, email })
    return Promise.resolve(user || null)
  }
}
