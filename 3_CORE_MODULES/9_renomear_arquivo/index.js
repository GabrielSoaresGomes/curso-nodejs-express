const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'

fs.rename('./arquivo.txt', arqNovo, (err) => {
    if (err) {
        console.log(err)
    }else {
        console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}!`)
    }
})