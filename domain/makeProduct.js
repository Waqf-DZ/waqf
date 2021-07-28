module.exports = function buildMakeProduct ({ getUniqueId, sanitize }) {
  return function makeProduct({
    id = getUniqueId(),
    name = '',
    type,
    serial,
    imageUrl = '',
    description = '',
    isAvailable = true,
    isBroken = false,
    freeDays = 0,
    dayPrice = 0,
    createdAt = Date.now(),
    ownerId
  }) {
    if (!type) throw new Error('Product must have a type')
    if (!serial) throw new Error('Product must have a serial')
    if (!ownerId) throw new Error('Product must have a ownerId')
    if (!Number.isFinite(freeDays)) {
      throw new Error('Product free days must be a number')
    }
    if (!Number.isFinite(dayPrice)) {
      throw new Error('Product day price must be a number')
    }
    name = sanitize(name)
    description = sanitize(description)
    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getType: () => type,
      getSerial: () => serial,
      getImageUrl: () => imageUrl,
      getDescription: () => description,
      getDayPrice: () => dayPrice,
      getFreeDays: () => freeDays,
      getCreatedAt: () => createdAt,
      getOwnerId: () => ownerId,
      isAvailable: () => isAvailable,
      isBroken: () => isBroken,
      markAvailable: () => isAvailable = true,
      markNotAvailable: () => isAvailable = false,
      markBroken: () => isBroken = true,
      markNotBroken: () => isBroken = false
    })
  }
}