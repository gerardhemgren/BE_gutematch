const { Pool } = require('pg')
require('dotenv').config()

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB
}
const prodConfig = {
    connectionString: `${process.env.URI}`,
    ssl: {
        rejectUnauthorized: false
    }
}

const pool = new Pool(prodConfig)

/* pool.on("connect", client => {
    client.on("notice", msg => console.log('config', msg.message))
    }); */

module.exports = { pool }