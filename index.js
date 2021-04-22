// const { request, response } = require('express')
const pool = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())

// CONTROLLERS:
app.get('/', async (req, res) => {
    try {
        res.json('/')
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/all_matchs', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM all_matchs ORDER BY date`)
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/my_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eventRows = await pool.query(`SELECT * FROM my_matchs($1)`, [id])
        res.json(eventRows.rows)
    } catch (error) {
        res.json([])
    }
})

app.get('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eventRows = await pool.query(`SELECT * FROM open_matchs($1)`, [id])
        res.json(eventRows.rows)
    } catch (error) {
        res.json([])
    }
})

app.get('*', async (req, res) => {
    try {
        res.json('wrong request')
    } catch (error) {
        console.log(error.message)
    }
})

app.post('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`CALL join_match($1, $2)`, [id_match, id])
    } catch (error) {
        res.json(error.message)
    }
})
//

app.listen(5000, () => {
    console.log('Server running on port 5000')
})