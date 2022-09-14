const path = require('path')

const customPath = '/amigos/lista/arquivo.json'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))