const express = require('express');

const server = express();

server.get('/awari', (req, res) => {
    console.log(req.query);
    return res.send('Yata');
});

server.listen(3333);

