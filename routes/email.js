const express = require('express')

const routes = express.Router()

routes.post('/send-email', (req, res) => {
 const { name, phone, message } = req.body
 res.render('pages/main', {
  submitted: true,
  user: { name, phone, message },
 })
})

module.exports = routes
