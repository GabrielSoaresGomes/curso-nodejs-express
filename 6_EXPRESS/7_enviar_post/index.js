//Externos
const express = require('express')

//Internos/Core
const path = require('path')

const app = express()
const PORT = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json()
)

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

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos! `)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.sendFile(`${basePath}/user.html`)
})


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)

})

app.listen(PORT, () => {
    console.log(`Rodando aplicação, http://localhost:${PORT}`)
})

