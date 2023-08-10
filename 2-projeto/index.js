const express = require('express');

const server = express();

server.get('/awari', (req, res) => {
    console.log(req.query);
    return res.send('Bom dia');
});

server.listen(3333);

