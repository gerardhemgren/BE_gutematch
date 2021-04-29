const express = require('express')
const { pool, notice } = require('../utils/config')

const match = express()

match.get('/', async (req, res) => {
    try {
        res.json('/')
    } catch (error) {
        console.log(error.message)
    }
})

match.get('/all_matchs', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM all_matchs ORDER BY date`)
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
})

match.get('/my_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT * FROM my_matchs($1)`, [id])
        res.json(result.rows)
    } catch (error) {
        res.json([])
    }
})

match.get('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT * FROM open_matchs($1)`, [id])
        res.json(result.rows)
    } catch (error) {
        res.json([])
    }
})

match.get('*', async (req, res) => {
    try {
        res.json('wrong request')
    } catch (error) {
        console.log(error.message)
    }
})

match.post('/:id', async (req, res) => {
    const { id } = req.params
    const { date, location, players_field } = req.body
    try {
        // console.log(id, date, location, players_field)
        await pool.query(`CALL create_match($1, $2, $3, $4)`, [id, date, location, players_field])
            .then(pool.on("connect", client => {
                client.on("notice", msg => res.json(msg.message))
            }));
    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
})

match.post('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`CALL join_match($1, $2)`, [id_match, id])
        res.json(`joined to: ${id_match}`)
    } catch (error) {
        res.json(error.message)
    }
})

match.delete('/my_matchs/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`CALL left_match($1, $2)`, [id_match, id])
        res.json(`lefted the match: ${id_match}`)
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = match