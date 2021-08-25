const { makeOrder } = require('../../../../domain/index')

module.exports = function makeOrdersDB({ model }) {
  return Object.freeze({
    async addOrder(order) {
      await model.create({
        id: order.id,
        patientName: order.patientName,
        patientAge: order.patientAge,
        oxygenRatio: order.oxygenRatio,
        hasChronicDesease: order.hasChronicDesease,
        isCovid: order.isCovid,
        prescriptionUrl: order.prescriptionUrl,
        status: order.status,
        assignedProductId: order.assignedProductId,
        assignedUserId: order.assignedUserId,
        createdAt: order.createdAt,
        acceptedAt: order.acceptedAt,
        completedAt: order.completedAt,
        ownerId: order.ownerId,
        isHospitalized: order.isHospitalized,
        wilaya: order.wilaya,
        city: order.city,
        description: order.description,
      })
    },

    async getOrder(id) {
      const order = await model.findOne({
        where: { id },
      })
      return makeOrder(order)
    },

    async updateOrder(order) {
      await model.update(
        {
          id: order.id,
          patientName: order.patientName,
          patientAge: order.patientAge,
          oxygenRatio: order.oxygenRatio,
          hasChronicDesease: order.hasChronicDesease,
          isCovid: order.isCovid,
          prescriptionUrl: order.prescriptionUrl,
          status: order.status,
          assignedProductId: order.assignedProductId,
          assignedUserId: order.assignedUserId,
          createdAt: order.createdAt,
          acceptedAt: order.acceptedAt,
          completedAt: order.completedAt,
          ownerId: order.ownerId,
          isHospitalized: order.isHospitalized,
          wilaya: order.wilaya,
          city: order.city,
          description: order.description,
        },
        {
          where: {
            id: order.id,
          },
        }
      )
    },

    deleteOrder(orderId) {
      model.destroy({
        where: {
          id: orderId,
        },
      })
    },

    async listOrders({ ownerId }) {
      const orders = ownerId
        ? await model.findAll({ where: { ownerId } })
        : await model.findAll()
      return orders.map((o) => makeOrder(o))
    },
  })
}
