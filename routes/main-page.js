const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
 res.render('pages/main', {
  submitted: false,
  user: null,
 })
})

module.exports = routes
