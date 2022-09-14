//Externos
const express = require('express')

//Internos/Core
const path = require('path')

const app = express()
const PORT = 3000

const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Usuário está logado!')
        next()
    } else {
        console.log('Não está logado, faça o login para proceder!')
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

app.listen(PORT, () => {
    console.log(`Rodando aplicação, http://localhost:${PORT}`)
})