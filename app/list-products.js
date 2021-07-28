module.exports = function makeListProducts({ productsDB }) {
  return async function listProducts({ ownerId } = {}) {
    const list = productsDB.listProducts({ ownerId })
    return Promise.resolve(list)
  }
}
