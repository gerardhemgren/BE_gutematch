const express = require('express')
const app = express()
const pool = require('./db')

start()

const player_id = 4

async function start() {
    try {
        await pool.connect()
        console.log(`connected on PORT: ${pool.port}

`)
        const name = await pool.query(`SELECT name FROM players WHERE id = ${player_id}`)
        console.log(`Player: ${name.rows[0].name}

JOINED GAMES:`)
        const {rows} = await pool.query(`SELECT * FROM show_player_games($1)`, [player_id])
        console.table(rows)
        console.log('OPEN EVENTS TO JOIN:')
        const eventRows = await pool.query(`SELECT * FROM show_player_open_games($1)`, [player_id])
        console.table(eventRows.rows)

    }
    catch (error) {
        console.log('Unnable: ', error)
    }
    finally {
        await pool.end()
        console.log(`
disconnected`)
    }
}