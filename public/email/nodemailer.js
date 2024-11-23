const dotenv = require('dotenv')
const fs = require('fs/promises')
const path = require('path')
const nodemailer = require('nodemailer')

dotenv.config()

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.APP_EMAIL_PASSWORD,
 },
})

async function nodeEmail(user) {
 const htmlTemplate = await fs.readFile(
  path.join(__dirname, 'email.html'),
  'utf-8'
 )

 const htmlContent = htmlTemplate
  .replace(/{{phone}}/g, user.phone)
  .replace(/{{name}}/g, user.name)
  .replace(/{{message}}/g, user.message)

 try {
  const info = await transporter.sendMail({
   from: `"Ivan Dev 🧑‍💻" <${process.env.EMAIL_USER}>`,
   to: process.env.EMAIL_RECEIVE,
   subject: 'Barbershop ✔',
   text: 'Hello world?',
   html: htmlContent,
  })

  console.log('Message sent: %s', info.messageId)
 } catch (error) {
  console.error('Error sending email:', error)
 }
}

module.exports = nodeEmail
