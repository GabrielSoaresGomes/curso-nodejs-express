const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const nota_1 = args.nota_1
const nota_2 = args.nota_2
const media = (nota_1+nota_2)/2

function calcular_media() {
    setTimeout(() => process.stdout.write('.'), 1000)
    setTimeout(() => process.stdout.write('.'), 2000)
    setTimeout(() => process.stdout.write('.\n'), 3000)

    setTimeout(() => {
        if (media >= 7) {
            console.log(chalk.green.bold("Meus parabéns, você foi aprovado!"))
        } else {
            console.log(chalk.red.italic("Sinto muito, você não foi aprovado!"))
        }
    },4000)
}

console.clear()
console.log(chalk.blue.bold("Calculando média!"))
calcular_media()

