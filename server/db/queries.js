const pool = require('./pool')

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM users")
    console.log(rows)
    return rows;
}

module.exports = {
    getAllUsernames
}