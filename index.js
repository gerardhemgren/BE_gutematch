const express = require('express')
const app = express()
const cors = require('cors')
const match = require('./controllers/matches')
const user = require('./controllers/users')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use('/', match, user)


const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})