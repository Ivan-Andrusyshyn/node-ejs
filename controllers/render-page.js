const barbers = require('../asset/barbers')
const portfolio = require('../asset/portfolio')
const db = require('../db/db')

const renderPage = (req, res) => {
 const user = db.user

 if (db.user) {
  req.flash(
   'success',
   'You successfully sent the email.'
  )
 }
 const successMessage = req.flash('success')[0]

 const errorMessage = req.flash('error')[0]

 res.render('pages/main', {
  submitted: !!req.flash('success').length,
  user,
  barbers,
  portfolio,
  successMessage,
  errorMessage,
 })
 db.user = null
}

module.exports = renderPage
