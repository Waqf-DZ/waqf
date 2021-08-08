const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: path.join('infrastructure', 'web', 'uploads'),
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

module.exports = upload
