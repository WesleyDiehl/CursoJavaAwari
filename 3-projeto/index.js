const express = require("express");
const server = express();

server.get('/produtos', (req, res) => {
    return res.send("Produtos");
})

server.listen(3333);