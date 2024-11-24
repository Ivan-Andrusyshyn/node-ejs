const fs = require('fs')

const onWriteUser = (req, res, next) => {
 const { name, phone, password } = req.body

 let rawdata = fs.readFileSync(
  'public/users.json'
 )
 let users = JSON.parse(rawdata)

 const user = users.find(
  (user) => user.name === req.body.name
 )
 if (!user && user !== null) {
  users.push({ name, phone, password })

  fs.writeFileSync(
   'public/users.json',
   JSON.stringify(users, null, 2)
  )
 }
 next()
}

module.exports = onWriteUser
