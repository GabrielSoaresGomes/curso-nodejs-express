const http = require('http')

const PORT = 3000

const SERVER = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if (!name) {
        res.end('<h1>Preencha seu nome: </h1> <form method="get"><input type="text" name="name"><input type="submit" value="enviar"></form>')
    }else {
        res.end(`Seja bem vindo(a) ${name}`)
    }
})

SERVER.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso! Clique na url para acessar: http://localhost:${PORT}`)
})