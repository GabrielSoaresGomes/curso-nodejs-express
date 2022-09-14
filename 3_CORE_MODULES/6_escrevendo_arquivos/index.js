const http = require('http')
const fs = require('fs')

const PORT = 3000

const SERVER = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    if (!name) {
        fs.readFile('./index.js.html', (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else {
        let other_name = fs.readFileSync('./arquivo.txt', 'utf8').toString()
        let full_name = other_name + '\n' + name
        fs.writeFile('arquivo.txt', full_name, (err, data) => {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        } )
    }


})

SERVER.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso! Clique na url para acessar: http://localhost:${PORT}`)
})