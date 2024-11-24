const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

const generateToken = (req, res, next) => {
 const { name, phone, password } = req.body

 const secretKey = process.env.JWT_KEY
 const options = {
  expiresIn: '10m',
 }

 const token = jwt.sign(
  { name, phone },
  secretKey,
  options
 )
 req.user = { name, phone, password }
 req.token = token
 next()
}

module.exports = generateToken
