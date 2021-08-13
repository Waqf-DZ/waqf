const { makeUser } = require('../../../../domain/index')

module.exports = function makeUsersDB({ model, Op }) {
  return Object.freeze({
    async addUser(user) {
      await model.create({
        id: user.id,
        email: user.email,
        phoneNumber: user.phoneNumber,
        passwordHash: user.passwordHash,
        displayName: user.displayName,
        description: user.description,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        role: user.role,
      })
    },

    async getUser({ id = '', email = '' }) {
      const user = await model.findOne({
        where: {
          [Op.or]: [{ id }, { email }],
        },
      })
      return makeUser(user)
    },

    async updateUser(user) {
      await model.update(
        {
          email: user.email,
          phoneNumber: user.phoneNumber,
          passwordHash: user.passwordHash,
          displayName: user.displayName,
          description: user.description,
          isVerified: user.isVerified,
          createdAt: user.createdAt,
          role: user.role,
        },
        {
          where: {
            id: user.id,
          },
        }
      )
    },

    deleteUser(userId) {
      model.destroy({
        where: {
          id: userId,
        },
      })
    },

    async listUsers() {
      const users = await model.findAll()
      return users.map((u) => makeUser(u))
    },
  })
}
