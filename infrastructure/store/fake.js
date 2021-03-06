const { makeOrder, makeProduct, makeUser } = require('../../domain/index')
const latency = 5

class Store {
  constructor() {
    this.products = [
      {
        id: 'product_1',
        name: 'منتج 1',
        type: 'مكثف',
        serial: '729893',
        imageUrl: 'https://m.media-amazon.com/images/I/514xi17BAGL._SX679_.jpg',
        description: 'بعض الوصف العشوائي',
        isAvailable: true,
        isBroken: false,
        freeDays: 0,
        dayPrice: 120,
        createdAt: Date.now(),
        ownerId: 'org_1',
      },
      {
        id: 'product_2',
        name: 'منتج 2',
        type: 'مكثف محمول',
        serial: '223934',
        imageUrl:
          'https://ae01.alicdn.com/kf/H45940412467d4ee3b8aa44e05d5b73afd/2-10LMP-10L-liter-portable-home-oxygen-concentrator-price-medical-machine-for-sales.jpg_Q90.jpg_.webp',
        description: 'بعض الوصف العشوائي',
        isAvailable: true,
        isBroken: false,
        freeDays: 0,
        dayPrice: 175,
        createdAt: Date.now(),
        ownerId: 'org_1',
      },
      {
        id: 'product_3',
        name: 'منتج 3',
        type: 'مكثف محمول',
        serial: '9988636',
        imageUrl:
          'https://ae01.alicdn.com/kf/H45940412467d4ee3b8aa44e05d5b73afd/2-10LMP-10L-liter-portable-home-oxygen-concentrator-price-medical-machine-for-sales.jpg_Q90.jpg_.webp',
        description: 'بعض الوصف العشوائي',
        isAvailable: true,
        isBroken: false,
        freeDays: 3,
        dayPrice: 140,
        createdAt: Date.now(),
        ownerId: 'org_2',
      },
    ]
    this.users = [
      {
        id: '74676743abcyhd',
        displayName: 'مدير المنصة',
        email: 'admin@gmail.com',
        phoneNumber: '0555443322',
        // password: "password"
        passwordHash:
          '$2a$10$wz5ZphSSFSQMJ9VqDWBQ/.GJh9ZTOpkq/l8OUnNpY7POAGZkH3YrW',
        role: 'ADMIN',
        isVerified: true,
        description: 'مدير منصة وقف',
        createdAt: Date.now(),
      },
      {
        id: 'user_1',
        displayName: 'محتاج 1',
        email: 'user1@gmail.com',
        phoneNumber: '0555443322',
        // password: "password"
        passwordHash:
          '$2a$10$wz5ZphSSFSQMJ9VqDWBQ/.GJh9ZTOpkq/l8OUnNpY7POAGZkH3YrW',
        role: 'SEEKING_HELP',
        isVerified: true,
        description: 'وصف مختصر 1',
        createdAt: Date.now(),
      },
      {
        id: 'user_2',
        displayName: 'محتاج 2',
        email: 'user2@gmail.com',
        phoneNumber: '0565541253',
        // password: "password"
        passwordHash:
          '$2a$10$wz5ZphSSFSQMJ9VqDWBQ/.GJh9ZTOpkq/l8OUnNpY7POAGZkH3YrW',
        role: 'SEEKING_HELP',
        isVerified: false,
        description: 'وصف مختصر 2',
        createdAt: Date.now(),
      },
      {
        id: 'org_1',
        displayName: 'جمعية 1',
        email: 'org1@gmail.com',
        phoneNumber: '0666443322',
        // password: "password"
        passwordHash:
          '$2a$10$wz5ZphSSFSQMJ9VqDWBQ/.GJh9ZTOpkq/l8OUnNpY7POAGZkH3YrW',
        role: 'GIVING_HELP',
        isVerified: true,
        description: 'جمعية مهتمة بالإغاثة ومساعدة المحتاجين',
        createdAt: Date.now(),
      },
      {
        id: 'org_2',
        displayName: 'جمعية 2',
        email: 'org2@gmail.com',
        phoneNumber: '0666893322',
        // password: "password"
        passwordHash:
          '$2a$10$wz5ZphSSFSQMJ9VqDWBQ/.GJh9ZTOpkq/l8OUnNpY7POAGZkH3YrW',
        role: 'GIVING_HELP',
        isVerified: true,
        description: 'جمعية مهتمة بتقديم المساعدات الطبية للمرضى',
        createdAt: Date.now(),
      },
    ]
    this.orders = [
      {
        id: 'order_1',
        patientName: 'محمد عبد الله',
        patientAge: 50,
        oxygenRatio: 95,
        hasChronicDesease: false,
        isCovid: true,
        prescriptionUrl:
          'https://previews.123rf.com/images/jes2ufoto/jes2ufoto1407/jes2ufoto140700223/30278466-prescription-note-representing-a-doctor-s-medicine-remedy-given-to-a-pharmacist-.jpg',
        createdAt: Date.now(),
        status: 'PENDING',
        acceptedAt: null,
        completedAt: null,
        assignedProductId: '',
        ownerId: 'user_1',
        isHospitalized: true,
      },
      {
        id: 'order_2',
        patientName: 'سامي محمد',
        patientAge: 65,
        oxygenRatio: 92,
        hasChronicDesease: true,
        isCovid: true,
        prescriptionUrl:
          'https://previews.123rf.com/images/jes2ufoto/jes2ufoto1407/jes2ufoto140700223/30278466-prescription-note-representing-a-doctor-s-medicine-remedy-given-to-a-pharmacist-.jpg',
        createdAt: Date.now(),
        status: 'PENDING',
        acceptedAt: null,
        completedAt: null,
        assignedProductId: '',
        ownerId: 'user_2',
        isHospitalized: false,
      },
      {
        id: 'order_3',
        patientName: 'جمال خير دين مكناس',
        patientAge: 77,
        oxygenRatio: 93,
        hasChronicDesease: true,
        isCovid: true,
        prescriptionUrl:
          'https://previews.123rf.com/images/jes2ufoto/jes2ufoto1407/jes2ufoto140700223/30278466-prescription-note-representing-a-doctor-s-medicine-remedy-given-to-a-pharmacist-.jpg',
        createdAt: Date.now(),
        status: 'PENDING',
        acceptedAt: null,
        completedAt: null,
        assignedProductId: '',
        ownerId: 'user_1',
        isHospitalized: false,
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

  updateUser(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const index = this.users.findIndex((o) => o.id == user.id)
          this.users.splice(index, 1, user)
          resolve(user)
        } catch (err) {
          console.log(err.message)
        }
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
        resolve(product ? makeProduct(product) : null)
      }, latency)
    })
  }

  updateProduct(product) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.products.findIndex((o) => o.id == product.id)
        this.products.splice(index, 1, product)
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
        let products = this.products.map((p) => makeProduct(p))
        if (ownerId) {
          products = products.filter((p) => p.ownerId == ownerId)
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
        resolve(order ? makeOrder(order) : null)
      }, latency)
    })
  }

  listOrders({ ownerId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let orders = this.orders.map((o) => makeOrder(o))
        if (ownerId) {
          orders = orders.filter((o) => o.ownerId == ownerId)
        }
        resolve(orders)
      }, latency)
    })
  }

  updateOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.orders.findIndex((o) => o.id == order.id)
        this.orders.splice(index, 1, order)
        resolve(order)
      }, latency)
    })
  }
}

module.exports = Store
