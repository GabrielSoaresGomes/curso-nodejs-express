const x = 10;

console.clear()

if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é inteiro!')
}

console.log("Continuação...")