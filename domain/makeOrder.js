const STATUS_OPTIONS = {
  pending: 'PENDING',
  completed: 'COMPLETED',
  accepted: 'ACCEPTED',
}

module.exports = function buildMakeOrder({ getUniqueId }) {
  return function makeOrder({
    id = getUniqueId(),
    patientName,
    patientAge,
    oxygenRatio,
    hasChronicDesease,
    isCovid,
    prescriptionUrl,
    status = STATUS_OPTIONS.pending,
    assignedProductId = null,
    assignedUserId = null,
    createdAt = Date.now(),
    acceptedAt = null,
    completedAt = null,
    ownerId,
  }) {
    if (!patientName) throw new Error('Order must have a patientName')
    if (!patientAge) throw new Error('Order must have a patientAge')
    if (!ownerId) throw new Error('Order must have a ownerId')
    if (!oxygenRatio) throw new Error('Order must have a oxygenRatio')
    if (hasChronicDesease == undefined)
      throw new Error('Order must have a hasChronicDesease')
    if (!prescriptionUrl) {
      throw new Error('Order must have a prescriptionUrl')
    }
    if (isCovid == undefined) {
      throw new Error('Order must have isCovid flag')
    }
    return Object.freeze({
      get id() {
        return id
      },
      get patientName() {
        return patientName
      },
      get patientAge() {
        return patientAge
      },
      get oxygenRatio() {
        return oxygenRatio
      },
      get hasChronicDesease() {
        return hasChronicDesease
      },
      get isCovid() {
        return isCovid
      },
      get prescriptionUrl() {
        return prescriptionUrl
      },
      get ownerId() {
        return ownerId
      },
      get status() {
        return status
      },
      get assignedProductId() {
        return assignedProductId
      },
      get assignedUserId() {
        return assignedUserId
      },
      get createdAt() {
        return createdAt
      },
      get acceptedAt() {
        return acceptedAt
      },
      get completedAt() {
        return completedAt
      },

      markPending: () => {
        status = STATUS_OPTIONS.pending
      },
      markAccepted: () => {
        status = STATUS_OPTIONS.accepted
      },
      markCompleted: () => {
        status = STATUS_OPTIONS.completed
      },
      assignProductId: (productId) => {
        assignedProductId = productId
      },
      assignUserId: (userId) => {
        assignedUserId = userId
      },
    })
  }
}
