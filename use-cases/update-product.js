module.exports = function makeUpdateProduct({ usersDB }) {
  return async function updateProduct({ productId, userParams }) {
    const updatedOrder = await usersDB.updateProduct({
      productId,
      userParams,
    })
    return updatedOrder
  }
}
