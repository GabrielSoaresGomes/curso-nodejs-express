const http = require('http')
const fs = require('fs')

const PORT = 3000

const SERVER = http.createServer((req, res) => {
    fs.readFile('./mensagem.html', (err, data) => {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
})

SERVER.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso! Clique na url para acessar: http://localhost:${PORT}`)
})