const express = require('express');
const { pool } = require('../utils/config');
const match = express();

match.get('/', async (req, res) => {
    try {
        res.json('Welcome');
    } catch (error) {
        console.log(error.message);
    }
})

match.get('/api/all_matches', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM all_matches WHERE date >= current_timestamp ORDER BY date`);
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
})

// Get my matches
match.get('/api/my_matches/:id', async (req, res) => {
    const { id } = req.params;
    const { clientDate } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM my_matches($1, $2)`, [id, clientDate]);
        res.json(result.rows);
    } catch (error) {
        res.json(error.message);
    }
})

// Get open matches
match.get('/api/open_matches/:id', async (req, res) => {
    const { id } = req.params;
    const { clientDate } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM open_matches($1, $2)`, [id, clientDate]);
        res.json(result.rows);
    } catch (error) {
        res.json(error.message);
    }
})

// Join match
match.post('/api/open_matches/owner/:id', async (req, res) => {
    const { id } = req.params;
    const { id_match } = req.body;
    try {
        await pool.query(`CALL join_match($1, $2)`, [id_match, id]);
        res.json(`Match joined succesfully`);
    } catch (error) {
        res.json(error.message);
    }
})

// Leave match
match.delete('/api/my_matches/:id', async (req, res) => {
    const { id } = req.params;
    const { id_match } = req.body;
    try {
        await pool.query(`CALL leave_match($1, $2)`, [id_match, id]);
        res.json(`Match lefted succesfully`);
    } catch (error) {
        res.json(error.message);
    }
})

// Create match
match.post('/api/create_match/:id', async (req, res) => {
    const { id } = req.params;
    const { date, location, players_field, name } = req.body;
    try {
        await
            pool.query(`SELECT create_match($1, $2, $3, $4, $5)`, [id, date, location, players_field, name])
                .then(msg => res.json(msg.rows[0].create_match));
    } catch (error) {
        res.json(error.message);
    }
})

// Delete my match
match.delete('/api/my_matches/owner/:id', async (req, res) => {
    const { id } = req.params;
    const { id_match } = req.body;
    try {
        await pool.query(`SELECT delete_match($1, $2)`, [id_match, id])
            .then(msg => res.json(msg.rows[0].delete_match));
    } catch (error) {
        res.json(error.message);
    }
})


// Edit match
match.put('/api/my_matches/owner/', async (req, res) => {
    const { matchId, date, location, players_field, name } = req.body;
    try {
        await pool.query(`SELECT edit_match($1, $2, $3, $4, $5)`, [matchId, date, location, players_field, name])
            .then(msg => res.json(msg.rows[0].edit_match));
    } catch (error) {
        res.json(error.message);
    }
})


// Handle wrong requests
match.get('*', async (req, res) => {
    try {
        res.json('Wrong request');
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = match;