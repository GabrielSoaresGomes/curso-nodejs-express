const _ = require('lodash')
// Precisa executar npm link lodash, mesmo ele estando instalado globalmente na máquina
const array = [1,2,2,3,4,4,4,5,5,6,7,8,8]

const only_one = _.sortedUniq(array)
console.log(only_one)