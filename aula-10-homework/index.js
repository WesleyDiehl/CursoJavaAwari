const express = require('express')
const app = express()
const PORT = 3333

app.get('/', (req, res) => {
    return res.send('What A Wonderful World!')
})

app.get('/music', (req, res) => {
    res.send(`<div class="ujudUb" style="text-align: center;">I see skies of <span style="color: #236fa1;">blue </span><br aria-hidden="true" />And clouds of <span style="color: #ced4d9;">white</span><br aria-hidden="true" />The bright blessed day<br aria-hidden="true" />The <span style="color: #ba372a;">dark sacred night</span><br aria-hidden="true" />And I think to myself <br aria-hidden="true" /><span style="color: #e67e23;">What a wonderful world</span></div>
    <p style="text-align: center;">&nbsp;</p> Voltar ao <a href="/">início</a>.</p>`);
});

app.listen(PORT, () => {
    console.log('App rodando em http://localhost:3333');
});