const { Pool } = require('pg')
require('dotenv').config()

if (process.env.DATABASE_URL) {
    pg.defaults.ssl = true;
}

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB
}
const prodConfig = {
    connectionString: `${process.env.DATABASE_URL}`,
    ssl: {
        rejectUnauthorized: false
    },
    sslmode: process.env.NODE_ENV === "production" ? "require" : "disable"
}

const pool = new Pool(prodConfig)

/* pool.on("connect", client => {
    client.on("notice", msg => console.log('config', msg.message))
    }); */

module.exports = { pool }