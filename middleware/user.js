const db = require('../db/db')

addUserToReq = (req, res, next) => {
 const { name, phone, message } = req.body

 req.user = { name, phone, message }
 db.user = req.user
 next()
}

module.exports = addUserToReq
