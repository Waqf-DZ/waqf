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
    isHospitalized,
    wilaya,
    city,
    description,
  }) {
    if (!patientName) throw new Error('Order must have a patientName')
    if (!patientAge) throw new Error('Order must have a patientAge')
    if (!ownerId) throw new Error('Order must have a ownerId')
    if (!oxygenRatio) throw new Error('Order must have a oxygenRatio')
    if (hasChronicDesease == undefined)
      throw new Error('Order must have a hasChronicDesease')
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
      get isPending() {
        return status == STATUS_OPTIONS.pending
      },
      get isAccepted() {
        return status == STATUS_OPTIONS.accepted
      },
      get isCompleted() {
        return status == STATUS_OPTIONS.completed
      },
      get isHospitalized() {
        return isHospitalized
      },
      get wilaya() {
        return wilaya
      },
      get city() {
        return city
      },
      get description() {
        return description
      },

      markPending: () => {
        status = STATUS_OPTIONS.pending
      },
      markAccepted: () => {
        status = STATUS_OPTIONS.accepted
        acceptedAt = Date.now()
      },
      markCompleted: () => {
        status = STATUS_OPTIONS.completed
        completedAt = Date.now()
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
