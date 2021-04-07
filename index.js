const { request, response } = require('express')
const express = require('express')
const app = express()
const pool = require('./db')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.json('Futbol App')
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
        const eventRows = await pool.query(`SELECT * FROM show_player_games($1)`, [id])
        res.json(eventRows.rows)
    } catch (error) {
        res.redirect(`http://localhost:5000`)
    }
})

app.get('/myopengames/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eventRows = await pool.query(`SELECT * FROM show_player_open_games($1)`, [id])
        res.json(eventRows.rows)
    } catch (error) {
        res.redirect(`http://localhost:5000`)
    }
})

app.get('*', async (req, res) => {
    try {
        res.json('wrong request')
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})