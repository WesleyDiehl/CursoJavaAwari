const express = require('express')
const app = express()
const PORT = 3333

app.get('/', (req, res) => {
    return res.send('What A Wonderful World!')
})

app.listen(PORT);