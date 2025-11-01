const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.get("/api", async (req, res) => {
})

app.listen(process.env.SERVER_PORT, (err) => {
    if (err) {
        console.log("Could not start the server, ", err)
    }
    console.log("Server started at port: ", process.env.SERVER_PORT)
})