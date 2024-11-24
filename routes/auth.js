const express = require('express')
const validateToken = require('../middleware/validateRequest')
const generateToken = require('../middleware/jwtToken')

const {
 signUp,
 getUser,
 logout,
} = require('../controllers/auth')

const router = express.Router()

router.post('/sign-up', generateToken, signUp)

router.get('/users', validateToken, getUser)

router.get('/logout', logout)

module.exports = router
