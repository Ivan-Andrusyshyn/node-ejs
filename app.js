const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const emailRoutes = require('./routes/email')
const mainPageRoutes = require('./routes/main-page')
const app = express()

app.set('view engine', 'ejs')

app.use(
 express.static(path.join(__dirname, 'public'))
)

app.use(
 bodyParser.urlencoded({ extended: false })
)
app.use(bodyParser.json())
app.use(
 helmet.contentSecurityPolicy({
  directives: {
   defaultSrc: ["'self'"],
   imgSrc: [
    "'self'",
    'data:',
    'https://i.postimg.cc',
   ],
  },
 })
)

app.get('/', mainPageRoutes)
app.use('/email', emailRoutes)

app.listen(3000, () => {
 console.log('Start server on port', 3000)
})
