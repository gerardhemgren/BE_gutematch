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
    connectionString: `${process.env.URIñ}`,
    ssl: {
        rejectUnauthorized: false
    },
    sslmode: "require"
}

const pool = new Pool(prodConfig)

module.exports = { pool }