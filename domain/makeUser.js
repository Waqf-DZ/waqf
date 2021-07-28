module.exports = function buildMakeUser({ getUniqueId }) {
  return function makeUser({
    id = getUniqueId(),
    email,
    passwordHash,
    displayName = '',
    description = '',
    isVerified = false,
    createdAt = Date.now(),
  }) {
    if (!id) throw new Error('User must have an id')
    if (!email) throw new Error('User must have an email')
    if (!passwordHash) throw new Error('User must have a passwordHash')

    return Object.freeze({
      getId: () => id,
      getEmail: () => email,
      getDisplayName: () => displayName,
      getDescription: () => description,
      getPasswordHash: () => passwordHash,
      getIsVerified: () => isVerified,
      getCreatedAt: () => createdAt,

      verify() {
        isVerified = true
      },
    })
  }
}
