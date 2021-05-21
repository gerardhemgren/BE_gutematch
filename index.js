const express = require('express')
const app = express()
const cors = require('cors')
const match = require('./controllers/matchs')
const user = require('./controllers/users')

app.use(cors())
app.use(express.json())
app.use('/', match, user)

app.listen(5000, () => {
    console.log('Server running on port 5000')
})