const db = require('../db/db')

addUserToReq = (req, res, next) => {
 const { name, phone, message } = req.body
 if (name) {
  req.user = { name, phone, message }
  db.user = req.user
 }

 next()
}

module.exports = addUserToReq
