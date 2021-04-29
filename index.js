const express = require('express')
const app = express()
const cors = require('cors')
const match = require('./controllers/matchs')

app.use(cors())
app.use(express.json())
app.use('/', match)

app.listen(5000, () => {
    console.log('Server running on port 5000')
})