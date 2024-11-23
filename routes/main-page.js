const express = require('express')

const routes = express.Router()

const barbers = require('../asset/barbers')

routes.get('/', (req, res) => {
 res.render('pages/main', {
  submitted: false,
  user: null,
  barbers,
 })
})

module.exports = routes
