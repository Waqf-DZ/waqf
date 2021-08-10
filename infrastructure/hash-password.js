const bcrypt = require('bcryptjs')

function hashPassword(password) {
  let salt = bcrypt.genSaltSync(10)
  let passwordHash = bcrypt.hashSync(password, salt)

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
  if (isMatch) {
    return true
  }
  return false
}

module.exports = {
  hashPassword,
  verifyPassword,
}
