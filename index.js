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

app.get('/allmatchs', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM games ORDER BY date`)
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/mygames/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eventRows = await pool.query(`SELECT * FROM show_player_matchs($1)`, [id])
        res.json(eventRows.rows)
    } catch (error) {
        res.json([])
    }
})

app.get('/myopengames/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eventRows = await pool.query(`SELECT * FROM show_player_open_matchs($1)`, [id])
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
//

app.listen(5000, () => {
    console.log('Server running on port 5000')
})