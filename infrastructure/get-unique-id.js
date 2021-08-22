const short = require('short-uuid')

module.exports = function getUniqueId() {
  return short.generate()
}
