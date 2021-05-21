const express = require('express')
const { pool } = require('../utils/config')

const user = express()

// Sign Up - Log in
user.post('/config/:id', async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        await pool.query('SELECT log_in($1, $2)', [id, name])
            .then(async () => {
                const user = await pool.query('SELECT id FROM players WHERE user_id = $1', [id])
                res.json(user.rows)
            })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = user