const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Olá, Mundo')
})

app.listen(PORT, () => {
    console.log(`Rodando aplicação, http://localhost:${PORT}`)
})