const fs = require('fs')

const signUp = (req, res) => {
 const access_token = req.token

 res.status(200).json({
  message: 'Success log!',
  access_token,
 })
}

const signIn = (req, res) => {
 const access_token = req.token
 req.flash('success', 'You successfully sign up.')

 res.status(201).json({
  message: 'Success log!',
  access_token,
 })
}
const getUser = (req, res) => {
 let rawdata = fs.readFileSync(
  'public/users.json'
 )
 let users = JSON.parse(rawdata)

 const user = users.find(
  (user) => user.name === req.user.name
 )
 console.log(user)

 res.json({
  success: true,
  message: 'Welcome to the protected route!',
  user,
 })
}

const logout = (req, res) => {
 req.user = null
 res.status(201).json({
  message: 'Success logout !',
 })
}

module.exports = {
 signUp,
 getUser,
 logout,
 signIn,
}
