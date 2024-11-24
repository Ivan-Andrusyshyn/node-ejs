const jwt = require('jsonwebtoken')
const db = require('../db/db')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (req, res, next) => {
 const { name, phone, password } = req.body
 db.user = { name, phone, password }

 const secretKey = process.env.JWT_KEY
 const options = {
  expiresIn: '10m',
 }

 const token = jwt.sign(
  { name, phone },
  secretKey,
  options
 )

 req.token = token
 next()
}

module.exports = generateToken
