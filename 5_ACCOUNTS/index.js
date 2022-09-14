// Módulos Externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// Módulos Internos/Core
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([{
        'type': 'list',
        'name': 'action',
        'message': 'O que deseja fazer?',
        'choices': [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
        .then(answer => {
            const action = answer['action']
            switch (action) {
                case 'Criar Conta':
                    createAccount()
                    break
                case 'Consultar Saldo':
                    getAccountBalance()
                    break
                case 'Depositar':
                    deposit()
                    break
                case 'Sacar':
                    withdraw()
                    break
                case 'Sair':
                    console.log(chalk.bgBlue.black(' Obrigado por usar o Accounts! '))
                    process.exit()
                    break
            }
            if (action === 'Criar Conta') {

            }
        })
        .catch(err => console.log(err))
}

// Criar uma conta
function createAccount() {
    console.log(chalk.bgGreen.black(' Parabéns por escolher o nosso banco! '))
    console.log(chalk.green(' Defina as opções à seguir para a criação da sua conta:  '))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta: '
        }
    ])
        .then(answer => {
            const accountName = answer.accountName
            console.info(accountName)
            !fs.existsSync('accounts') && fs.mkdirSync('accounts')
            if (fs.existsSync(`./accounts/${accountName}.json`)) {
                console.log(chalk.bgRed.black(' Já existe uma conta com este nome, escolha outro! '))
                buildAccount()
                return
            } else {
                fs.writeFileSync(`./accounts/${accountName}.json`, '{"balance": 0}', (err) => {
                    console.log(err)
                })
            }
            console.log(chalk.green(' Parabéns, sua conta foi criada com sucesso! '))
            operation()
        })
        .catch(err => console.log(err))
}
// Adiciona um valor para uma conta específica
function deposit() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta? '
    }])
        .then(answer => {
            const accountName = answer.accountName
            if (!checkAccount(accountName)) {
                return deposit()
            }
            inquirer.prompt([{
                name: 'amount',
                message: 'Qual o valor que deseja depositar? R$'

            }])
                .then(answer_amount => {
                    const amount = answer_amount.amount
                    addAmount(accountName, amount)
                    operation()
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black(' Esta conta não existe, insira um outro nome!! '))
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)
    if (!amount) {
        console.log(chalk.bgRed.black(' Ocorreu um erro, tente novamente mais tarde! '))
        return deposit()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    fs.writeFileSync(`./accounts/${accountName}.json`, JSON.stringify(accountData), (err) => {
        console.log(err)
    })
    console.log(chalk.bgGreen.white(` Foi depositado o valor de R$${parseFloat(amount).toFixed(2)} na sua conta! `))

}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`./accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })
    return JSON.parse(accountJson)
}

// Mostrar o saldo de uma conta
function getAccountBalance(accountName) {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Insira o nome da sua conta: '
    }])
        .then(answer => {
            const accountName = answer.accountName
            if(!checkAccount(accountName)) {
                return getAccountBalance()
            }
            const accountData = getAccount(accountName)
            console.log(chalk.bgBlue.black(` Olá, o saldo de sua conta é de R$${parseFloat(accountData.balance).toFixed(2)}` ))
            operation()
        })
        .catch(err => console.log(err))
}
// Sacar um valor especifico de uma conta
function withdraw() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Insira o nome de sua conta: '
    }])
        .then(answer => {
            const accountName = answer.accountName
            if (!checkAccount(accountName)) {
                return withdraw()
            }
            inquirer.prompt([{
                name: 'amount',
                message: 'Quantos R$ deseja sacar? '
            }])
                .then(answer_amount => {
                    const amount = answer_amount.amount
                    removeAmmount(accountName, amount)
                })
                .catch(err => console.log(err))


        })
        .catch(err => console.log(err))
}

function removeAmmount(accountName, amount) {
    const accountData = getAccount(accountName)
    if (!amount) {
        console.log(chalk.bgRed.black(' Ocorreu um erro, tente novamente mais tarde! '))
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black(' Valor indisponível! '))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
    fs.writeFileSync(`./accounts/${accountName}.json`, JSON.stringify(accountData), (err) => {
        console.log(err)
    })
    console.log(chalk.green(`Foi realizado um saque de R$${parseFloat(amount).toFixed(2)} da sua conta!`))
    operation()
}