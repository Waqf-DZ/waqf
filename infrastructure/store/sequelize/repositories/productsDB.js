const { makeProduct } = require('../../../../domain/index')

module.exports = function makeProductsDB({ model }) {
  return Object.freeze({
    async addProduct(product) {
      await model.create({
        id: product.id,
        name: product.name,
        type: product.type,
        serial: product.serial,
        imageUrl: product.imageUrl,
        description: product.description,
        isAvailable: product.isAvailable,
        isBroken: product.isBroken,
        freeDays: product.freeDays,
        dayPrice: product.dayPrice,
        createdAt: product.createdAt,
        ownerId: product.ownerId,
      })
    },

    async getProduct(id) {
      const product = await model.findOne({
        where: { id },
      })
      return makeProduct(product)
    },

    async updateProduct(product) {
      await model.update(
        {
          id: product.id,
          name: product.name,
          type: product.type,
          serial: product.serial,
          imageUrl: product.imageUrl,
          description: product.description,
          isAvailable: product.isAvailable,
          isBroken: product.isBroken,
          freeDays: product.freeDays,
          dayPrice: product.dayPrice,
          createdAt: product.createdAt,
          ownerId: product.ownerId,
        },
        {
          where: {
            id: product.id,
          },
        }
      )
    },

    deleteProduct(productId) {
      model.destroy({
        where: {
          id: productId,
        },
      })
    },

    async listProducts({ ownerId }) {
      const products = ownerId
        ? await model.findAll({ where: { ownerId } })
        : await model.findAll()
      return products.map((p) => makeProduct(p))
    },
  })
}
