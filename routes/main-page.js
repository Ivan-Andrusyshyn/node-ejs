const express = require('express')
const renderPage = require('../controllers/render-page')

const routes = express.Router()

routes.get('/', renderPage)

module.exports = routes
