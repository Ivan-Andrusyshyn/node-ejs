const express = require('express')

const routes = express.Router()

const email = require('../controllers/email')
const addUserToReq = require('../middleware/user')

routes.post(
 '/send-email',
 addUserToReq,
 email.postEmail
)

module.exports = routes
