const express = require('express')
const renderPage = require('../controllers/render-page')
const addUserToReq = require('../middleware/user')

const routes = express.Router()

routes.get('/', addUserToReq, renderPage)

module.exports = routes
