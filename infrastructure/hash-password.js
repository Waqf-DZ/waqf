const bcrypt = require('bcryptjs')

async function hashPassword(password) {
  let passwordHash = await bcrypt.hash(password, 10)

  if (
    !passwordHash ||
    typeof passwordHash !== 'string' ||
    password == passwordHash
  ) {
    throw Error('Error hashing user password')
  }
  return passwordHash
}

async function verifyPassword(rawPassword, passwordHash) {
  const isMatch = await bcrypt.compare(rawPassword, passwordHash)
  return Boolean(isMatch)
}

module.exports = {
  hashPassword,
  verifyPassword,
}
