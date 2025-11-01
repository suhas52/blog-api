const pool = require('./pool')



async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM users")
    console.log(rows)
    return rows;
}

async function loginUser(username) {
    const { rows } = await pool.query("SELECT (id, username, is_admin, password) FROM users WHERE username = ($1)", [username]);
    return rows;
}

module.exports = {
    getAllUsernames,
    loginUser
}