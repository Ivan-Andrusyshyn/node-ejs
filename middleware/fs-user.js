const fs = require('fs')
const bcrypt = require('bcrypt')

const onWriteUser = (req, res, next) => {
 const { name, phone, password } = req.body

 let rawdata = fs.readFileSync(
  'public/users.json'
 )
 let users = JSON.parse(rawdata)

 const user = users.find(
  (user) => user.name === req.body.name
 )
 // special did by name comparing
 const hash = bcrypt.hashSync(password, 12)

 if (!user && user !== null) {
  users.push({ name, phone, password: hash })

  fs.writeFileSync(
   'public/users.json',
   JSON.stringify(users, null, 2)
  )
 }
 next()
}

module.exports = onWriteUser
