const express = require('express');
const axios = require('axios');
const server = express();

server.get('/awari', (req, res) => {
    const result = axios.get('https://viacep.com.br/ws/01001000/json/');
    console.log('result');
    return res.send('Bom dia teste sera?');
});

server.listen(3333);

