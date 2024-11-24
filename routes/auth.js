const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.post('/sign-up', (req, res) => {
 const { name, phone, password } = req.body

 db.user = { name, phone, password }
 res.status(200).json({
  message: 'Success log!',
 })
})

router.get('/logout', (req, res) => {
 db.user = null
 res.status(201).json({
  message: 'Success logout !',
 })
})

module.exports = router
