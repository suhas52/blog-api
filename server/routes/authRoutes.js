const express = require('express');
const { loginUser } = require('../db/queries');
const router = express.Router();
const bcrypt = require('bcryptjs')

router.post("/login", async (req, res) => {
    const credentials = await loginUser(req.body.username, req.body.password);
    const [server_id, server_username, server_is_admin, server_password] = credentials[0].row.slice(1, -1).split(',');
    const match = await bcrypt.compare(req.body.password, server_password);
    console.log(match)
} 
)

module.exports = router;