const express = require('express')

const routes = express.Router()
const barbers = require('../asset/barbers')
const portfolio = require('../asset/portfolio')

routes.post('/send-email', (req, res) => {
 const { name, phone, message } = req.body
 res.render('pages/main', {
  submitted: true,
  user: { name, phone, message },
  barbers,
  portfolio,
 })
})

module.exports = routes
