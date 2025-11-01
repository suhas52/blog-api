const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_username,
    database: process.env.DB_name,
    password: process.env.DB_password,
    port: process.env.DB_PORT
})