const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    password: 'postre',
    host: '127.0.0.1',
    port: 5432,
    database: 'FTBL'
})

start()

const player_id = 4

async function start() {
    try {
        await client.connect()
        console.log(`connected on PORT: ${client.port}

`)
        const name = await client.query(`SELECT name FROM players WHERE id = ${player_id}`)
        console.log(`Player: ${name.rows[0].name}

JOINED GAMES:`)
        const {rows} = await client.query(`SELECT * FROM show_player_games($1)`, [player_id])
        console.table(rows)
        console.log('OPEN EVENTS TO JOIN:')
        const eventRows = await client.query(`SELECT * FROM show_player_open_games($1)`, [player_id])
        console.table(eventRows.rows)

    }
    catch (error) {
        console.log('Unnable: ', error)
    }
    finally {
        await client.end()
        console.log(`
disconnected`)
    }
}

// async function start() {
//     try {
//         await client.connect()
//         console.log(`connected on PORT: ${client.port}`)
//         await client.query('BEGIN')
//         await client.query('UPDATE players SET name = $1', ['jojo'])
//         const {rows} = await client.query(`SELECT * FROM players`)
//         console.table(rows)
//         await client.query('CALL insert_player_update_game($1, $2)', [11,5])
//         await client.query(`SELECT * FROM events`)
//         console.table(rows)
//         await client.query('COMMIT')

//     }
//     catch (error) {
//         console.log('Unnable: ', error)
//         await client.query('ROLLBACK')

//     }
//     finally {
//         const {rows} = await client.query(`SELECT * FROM players`)
//         console.table(rows)
//         await client.end()
//         console.log('disconnected')
//     }
// }