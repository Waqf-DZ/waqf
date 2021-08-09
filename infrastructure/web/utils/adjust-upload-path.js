const path = require('path')

module.exports = function adjustUploadPath(url) {
  const adjusted = url.replace('infrastructure/web', '')
  return path.normalize(adjusted)
}
