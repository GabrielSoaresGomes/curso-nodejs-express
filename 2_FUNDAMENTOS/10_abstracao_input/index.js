const inquirer = require('inquirer')

inquirer.prompt([
    {
        name:'p1', message:'Qual a nota da P1:'
    },
    {
        name:'p2', message: 'Qual a nota da P2:'
    }
]).then(answers => {
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2
    console.log(`Média é ${media}`)
}).catch(err => console.log(err))