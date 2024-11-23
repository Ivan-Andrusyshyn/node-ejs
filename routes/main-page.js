const express = require('express')

const routes = express.Router()

const barbers = require('../asset/barbers')
const portfolio = require('../asset/portfolio')

routes.get('/', (req, res) => {
 res.render('pages/main', {
  submitted: false,
  user: null,
  barbers,
  portfolio,
 })
})

module.exports = routes
