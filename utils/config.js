const { Pool } = require('pg')
require('dotenv').config()

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
}

const prodConfig = {
    user: process.env.AD_USER,
    password: process.env.AD_PASSWORD,
    host: process.env.AD_HOST,
    port: process.env.AD_PORT,
    database: process.env.AD_DATABASE
}

const prodConfigHK = {
    connectionString: `${process.env.URI}`,
    ssl: false,
    ssl: {
        rejectUnauthorized: false
    }
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? prodConfig : devConfig)

module.exports = { pool }