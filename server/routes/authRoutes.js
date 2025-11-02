const express = require('express');
const { loginUser, registerUser } = require('../db/queries');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post("/login", async (req, res) => {
    const user = await loginUser(req.body.username, req.body.password)
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
        const token = jwt.sign({ userId: user.id, username: user.username, isAdmin: user.is_admin }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000
        });
    }
} 
)

router.post("/register", async (req, res) => {
    const {name, username, password} = req.body;
    const numSaltRounds = 8;
    const hash = await bcrypt.hash(password, numSaltRounds);
    registerUser(name, username, hash);
})

module.exports = router;