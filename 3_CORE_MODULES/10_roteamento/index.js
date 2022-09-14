const http = require('http')
const fs = require('fs')
const url = require('url')

const PORT = 3000
const SERVER = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)
    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, (err, data) => {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', (err, data) => {
                res.writeHead(404, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }

})

SERVER.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso! Clique na url para acessar: http://localhost:${PORT}`)
})