const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.post('/', (req, res) => {
 const { name, phone, password } = req.body
 console.log('Регистрация:', {
  name,
  phone,
  password,
 })
 db.user = { name, phone, password }
 res.status(200).json({
  message: 'Вы успешно зарегистрировались!',
 })
})

module.exports = router
