const { makeUser } = require('../../domain/index')
const latency = 5

class Store {
  constructor() {
    this.products = [
      {
        name: 'منتج صيني',
        type: 'مكثف محمول',
        serial: '729893-TD',
        imageUrl: 'https://github.com/Waqf-DZ/waqf/issues',
        description: 'بعض الوصف العشوائي',
        isAvailable: true,
        isBroken: false,
        freeDays: 0,
        dayPrice: 120,
        createdAt: Date.now(),
        ownerId: 'xx129',
      },
      {
        name: 'منتج صيني',
        type: 'مكثف محمول',
        serial: '223934-BS',
        imageUrl: 'https://github.com/Waqf-DZ/waqf/issues',
        description: 'بعض الوصف العشوائي',
        isAvailable: true,
        isBroken: false,
        freeDays: 0,
        dayPrice: 175,
        createdAt: Date.now(),
        ownerId: 'yy234',
      },
    ]
    this.users = [
      {
        id: '74676743abcyhd',
        displayName: 'مدير المنصة',
        email: 'admin@gmail.com',
        phoneNumber: '0555443322',
        passwordHash: 'password',
        role: 'ADMIN',
        isVerified: true,
        description: 'مدير منصة وقف',
        createdAt: Date.now(),
      },
      {
        id: '74676743zyxus',
        displayName: 'جون دو',
        email: 'doe@gmail.com',
        phoneNumber: '0555443322',
        passwordHash: 'password',
        role: 'SEEKING_HELP',
        isVerified: false,
        description: 'يمكن أن يحدث خطأ ما مع هذا المستخدم',
        createdAt: Date.now(),
      },
    ]
    this.orders = [
      {
        id: 'Bcbegf73hukUGifeg',
        patientName: 'محمد عبد الله',
        patientAge: 50,
        oxygenRatio: 95,
        hasChronicDesease: false,
        isCovid: true,
        prescriptionUrl: 'https://github.com/Waqf-DZ/waqf/issues',
        createdAt: Date.now(),
        status: 'PENDING',
        acceptedAt: null,
        completedAt: null,
        assignedProductId: '',
        ownerId: 'h84k8djfieSNcjdd',
      },
      {
        id: 'Dn8HD338ccuhDJH8df',
        patientName: 'سامي محمد',
        patientAge: 65,
        oxygenRatio: 92,
        hasChronicDesease: true,
        isCovid: true,
        prescriptionUrl: 'https://github.com/Waqf-DZ/waqf/issues',
        createdAt: Date.now(),
        status: 'PENDING',
        acceptedAt: null,
        completedAt: null,
        assignedProductId: '',
        ownerId: 'JudnYdh263jdkf8h',
      },
    ]
  }

  addUser(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.users.push(user)
        resolve(user)
      }, latency)
    })
  }

  getUser({ id, email }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id) {
          const user = this.users.find((user) => user.id == id)
          resolve(user ? makeUser(user) : null)
        } else if (email) {
          const user = this.users.find((user) => user.email == email)
          resolve(user ? makeUser(user) : null)
        } else {
          throw new Error('getUser require id or email')
        }
      }, latency)
    })
  }

  updateUser({ updatedUser, email, name, phoneNumber }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        updatedUser.name = name
        updatedUser.phoneNumber = phoneNumber
        this.users.forEach((user) => {
          if (user.email == email) {
            user = updatedUser
          }
        })
        resolve(updatedUser)
      }, latency)
    })
  }

  deleteUser(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.users.findIndex((o) => o.id == userId)
        const user = this.users[index]
        this.users.splice(index, 1)
        resolve(user)
      }, latency)
    })
  }

  listUsers() {
    return new Promise((resolve) => {
      const users = this.users.map((u) => makeUser(u))
      setTimeout(() => {
        resolve(users)
      }, latency)
    })
  }

  addProduct(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.products.push(product)
        resolve(product)
      }, latency)
    })
  }

  getProduct(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = this.products.find((p) => p.id == id)
        resolve(product)
      }, latency)
    })
  }

  deleteProduct(productId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.products.findIndex((o) => o.id == productId)
        const product = this.products[index]
        this.products.splice(index, 1)
        resolve(product)
      }, latency)
    })
  }

  listProducts({ ownerId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let products = this.products
        if (ownerId) {
          products = this.products.filter((p) => p.ownerId == ownerId)
        }
        resolve(products)
      }, latency)
    })
  }

  addOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.orders.push(order)
        resolve(order)
      }, latency)
    })
  }

  deleteOrder(orderId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.orders.findIndex((o) => o.id == orderId)
        const order = this.orders[index]
        this.orders.splice(index, 1)
        resolve(order)
      }, latency)
    })
  }

  getOrder(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const order = this.orders.find((o) => o.id == id)
        resolve(order)
      }, latency)
    })
  }

  listOrders({ ownerId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let orders = this.orders
        if (ownerId) {
          orders = this.orders.filter((o) => o.ownerId == ownerId)
        }
        resolve(orders)
      }, latency)
    })
  }
}

module.exports = Store
