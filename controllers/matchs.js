const express = require('express')
const { pool } = require('../utils/config')

const match = express()

match.get('/', async (req, res) => {
    try {
        res.json('Welcome')
    } catch (error) {
        console.log(error.message)
    }
})

match.get('/all_matchs', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM all_matchs WHERE date >= current_timestamp ORDER BY date`)
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// Get my matchs
match.get('/my_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT * FROM my_matchs($1)`, [id])
        res.json(result.rows)
    } catch (error) {
        res.json(error.message)
    }
})

// Get open matchs
match.get('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT * FROM open_matchs($1)`, [id])
        res.json(result.rows)
    } catch (error) {
        res.json(error.message)
    }
})

// Create match
match.post('/add_match/:id', async (req, res) => {
    const { id } = req.params
    const { date, location, players_field, name } = req.body
    try {
        await
            pool.query(`SELECT create_match($1, $2, $3, $4, $5)`, [id, date, location, players_field, name])
                .then(msg => res.json(msg.rows[0].create_match))
    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
})

// Delete my match
match.delete('/my_matchs/owner/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`SELECT delete_match($1, $2)`, [id_match, id])
            .then(msg => res.json(msg.rows[0].delete_match))
    } catch (error) {
        res.json(error.message)
    }
})

// Join match
match.post('/open_matchs/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`CALL join_match($1, $2)`, [id_match, id])
        res.json(`Match joined succesfully`)
    } catch (error) {
        res.json(error.message)
    }
})

// Left match
match.delete('/my_matchs/:id', async (req, res) => {
    const { id } = req.params
    const { id_match } = req.body
    try {
        await pool.query(`CALL left_match($1, $2)`, [id_match, id])
        res.json(`Match lefted succesfully`)
    } catch (error) {
        res.json(error.message)
    }
})

match.get('*', async (req, res) => {
    try {
        res.json('Wrong request')
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = match