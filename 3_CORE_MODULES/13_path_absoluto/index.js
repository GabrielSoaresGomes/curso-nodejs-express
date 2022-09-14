const path = require('path')

//Path absoluto (saber o caminho desde o inicio do armazenamento até o arquivo
console.log(path.resolve('text.txt'))

//Formar Path
const midFolder = 'relatorios'
const fileName = 'gabriel.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)
console.log(finalPath)