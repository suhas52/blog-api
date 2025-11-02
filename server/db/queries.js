const pool = require('./pool')



async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM users")
    console.log(rows)
    return rows;
}

async function loginUser(username) {
    const { rows } = await pool.query("SELECT id, username, is_admin, password FROM users WHERE username = ($1)", [username]);
    return rows[0];
}

async function registerUser(name, username, hash) {
    await pool.query("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", [name, username, hash])
}

module.exports = {
    getAllUsernames,
    loginUser,
    registerUser
}