const latency = 5

class Store {
  constructor() {
    this.products = []
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
    this.users = []
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
          const user = this.users.find((user) => user.getId() == id)
          resolve(user)
        } else if (email) {
          const user = this.users.find((user) => user.getEmail() == email)
          resolve(user)
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
      setTimeout(() => {
        resolve(this.users)
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
          products = this.products.filter((p) => p.getOwnerId() == ownerId)
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
          orders = this.orders.filter((p) => p.getOwnerId() == ownerId)
        }
        resolve(orders)
      }, latency)
    })
  }
}

module.exports = Store
