const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: path.join('infrastructure', 'web', 'uploads'),
  filename: function (req, file, callback) {
    const userId = req.user.id
    const extension = path.extname(file.originalname)
    const fieldName = file.fieldname
    const timestamp = Date.now()
    callback(null, `${fieldName}_${userId}_${timestamp}${extension}`)
  },
})
const upload = multer({ storage: storage })

module.exports = upload
