const latency = 5

class Store {
  constructor() {
    this.products = []
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
        }
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
}

module.exports = Store
