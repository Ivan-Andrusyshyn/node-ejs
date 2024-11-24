const express = require('express')
const validateToken = require('../middleware/validateRequest')
const generateToken = require('../middleware/jwtToken')
const onWriteUser = require('../middleware/fs-user')
const {
 signUp,
 getUser,
 signIn,
 logout,
} = require('../controllers/auth')

const router = express.Router()

router.post(
 '/sign-up',
 onWriteUser,
 generateToken,
 signUp
)
router.post(
 '/sign-in',
 onWriteUser,
 generateToken,
 signIn
)

router.get('/users', validateToken, getUser)

router.get('/logout', logout)

module.exports = router
