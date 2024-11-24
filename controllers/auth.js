const db = require('../db/db')

const signUp = (req, res) => {
 const access_token = req.token

 res.status(200).json({
  message: 'Success log!',
  access_token,
 })
}

const getUser = (req, res) => {
 res.json({
  success: true,
  message: 'Welcome to the protected route!',
  user: req.user,
 })
}

const logout = (req, res) => {
 db.user = null
 res.status(201).json({
  message: 'Success logout !',
 })
}

module.exports = { signUp, getUser, logout }
