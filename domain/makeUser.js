const USER_ROLES = {
  admin: 'ADMIN',
  director: 'DIRECTOR',
  helpGiver: 'GIVING_HELP',
  helpSeeker: 'SEEKING_HELP',
}

module.exports = function buildMakeUser({ getUniqueId }) {
  return function makeUser({
    id = getUniqueId(),
    email,
    phoneNumber,
    passwordHash,
    displayName = '',
    description = '',
    isVerified = false,
    createdAt = Date.now(),
    role,
  }) {
    if (!id) throw new Error('User must have an id')
    if (!email) throw new Error('User must have an email')
    if (!phoneNumber) throw new Error('User must have a phoneNumber')
    if (!passwordHash) throw new Error('User must have a passwordHash')
    if (!Object.values(USER_ROLES).includes(role)) {
      throw new Error('User must have a valid role')
    }

    return Object.freeze({
      get id() {
        return id
      },
      get role() {
        return role
      },
      get email() {
        return email
      },
      get phoneNumber() {
        return phoneNumber
      },
      get displayName() {
        return displayName
      },
      get description() {
        return description
      },
      get passwordHash() {
        return passwordHash
      },
      get isVerified() {
        return isVerified
      },
      get createdAt() {
        return createdAt
      },

      verify() {
        isVerified = true
      },
      isGivingHelp() {
        return role === USER_ROLES.helpGiver
      },
      isSeekingHelp() {
        return role === USER_ROLES.helpSeeker
      },
    })
  }
}
