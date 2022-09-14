//Externos
const express = require('express')

//Internos/Core
const path = require('path')

const app = express()
const PORT = 3000

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, () => {
    console.log(`Rodando aplicação, http://localhost:${PORT}`)
})