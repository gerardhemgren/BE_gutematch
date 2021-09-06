const express = require('express')
const { pool } = require('../utils/config')

const user = express()

// Sign Up - Log in
user.post('/api/config', async (req, res) => {
    const { sub, name } = req.body
    try {
        await pool.query('SELECT log_in($1, $2)', [sub, name])
            .then(async () => {
                const user = await pool.query('SELECT id, name FROM players WHERE user_id = $1', [sub])
                res.json(user.rows)
            })
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = user