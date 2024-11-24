const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const validateToken = (req, res, next) => {
 const authHeader = req.headers.authorization

 if (authHeader) {
  const token = authHeader.split(' ')[1]

  jwt.verify(
   token,
   process.env.JWT_KEY,
   (err, payload) => {
    if (err) {
     return res.status(403).json({
      success: false,
      message: 'Invalid token',
     })
    } else {
     req.user = payload
     next()
    }
   }
  )
 } else {
  res.status(401).json({
   success: false,
   message: 'Token is not provided',
  })
 }
}

module.exports = validateToken
