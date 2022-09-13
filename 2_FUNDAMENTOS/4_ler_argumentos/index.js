const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]
console.log(`Nome é ${nome} e idade é ${idade} anos.`)

// Executar o arquivo passando parâmetros!
// ex.: node index.js --nome='Gabriel' --idade=18