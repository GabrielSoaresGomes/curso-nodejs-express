const minimist = require('minimist')

// Módulo Externo
const args = minimist(process.argv.slice(2))

// Módulo Interno
//const variavel = require('arquivo'), isso está pegando o módulo inteiro do arquivo, e colocamos o .soma depois
// para puxar a função deste módulo
const soma = require('./soma').soma
const a = parseInt(args.a)
const b = parseInt(args.b)

soma(a, b)

// node index.js --a=12 --b=12
