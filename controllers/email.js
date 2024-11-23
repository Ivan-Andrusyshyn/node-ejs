const barbers = require('../asset/barbers')
const portfolio = require('../asset/portfolio')

const nodemailer = require('../public/email/nodemailer')

const postEmail = async (req, res) => {
 try {
  //   await nodemailer(user)

  res.redirect('/')
 } catch (error) {
  console.error('Error sending email:', error)
  res.redirect('/')
 }
}

module.exports = { postEmail }
