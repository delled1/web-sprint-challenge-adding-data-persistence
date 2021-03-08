// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")

const server = express()

server.use(helmet())
server.use(express.json())

server.get("/", (req, res) => {
    res.send("<h1>Unit 4: Adding Data Persistence Sprint Challenge")
})

module.exports = server;