const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question("Qual a sua linguagem favorita? ", (linguagem) => {
    if (linguagem === 'Python') {
        console.log('Excelente escolha!')
    }
    console.log("A minha linguagem preferia é ", linguagem, "!")
    readline.close()
})

