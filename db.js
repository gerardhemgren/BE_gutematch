const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'postre',
    host: '127.0.0.1',
    port: 5432,
    database: 'FTBL'
})

module.exports = pool