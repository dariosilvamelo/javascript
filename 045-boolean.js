let variavel_boolean = true
console.log('variavel tem o valor = ' + variavel_boolean)
console.log('o oposta da variavel = ' + !variavel_boolean)
valor_1_0 = 1
console.log('O valor 1 é consederado true assim o oposto de 1   = ' + !valor_1_0)
console.log('Para mostrar que o valor da variavel é 1 (true) !! = ' + !!valor_1_0)
valor_1_0 = 0
console.log('O valor 0 é consederado false assim o oposto de 0  = ' + !valor_1_0)
console.log('Para mostrar que o valor da variavel 0 (false) !!  = ' + !!valor_1_0)

console.log('=================================================')
console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-3)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

//não é se a atribuição deu certo ou não (é um valor que é resolvido para verdadiro)
console.log(!!(variavel_boolean = true))
console.log(!!(variavel_boolean = 33))
console.log('=================================================')
console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null) //valor nulo
console.log(!!NaN) //not a number (não é um numero)
console.log(!!undefined)
console.log(!!(variavel_boolean = false))
console.log('=================================================')
console.log('Exemplo1: condição or', !!('' || 0 || null))
console.log('Exemplo2: condição or', !!('' || 0 || null || '3'))
console.log('Exemplo3: condição or', !!('' || 0 || null || ' '))
console.log('=================================================')
nome = ''
console.log('nome..: ', nome || 'Desconhecido')
nome = 'Dário'
console.log('nome..: ', nome || 'Desconhecido')
console.log('Peso..: ', '' || 100 || 47) // pega o primeiro valor verdadeiro





