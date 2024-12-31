const escola = 'cod3r'
console.log(escola.indexOf('c'))
console.log(escola.indexOf('o'))
console.log(escola.indexOf('d'))
console.log(escola.indexOf('3'))
console.log(escola.indexOf('r'))
console.log(escola.charAt(4)) // retorna a letra r deaconto com seu indice
console.log(escola.charAt(5)) // retorna vazio.
console.log(escola.substring(1))
console.log(escola.substring(1, 3)) //Vai do indice 1 e me da trê caracteres. não pega o catecte que esta no inice 3 
console.log(escola.charCodeAt(2))// pegaria o caracter 'd' e retorno qual é o numero dele na tavela unicode
console.log('Escola: '.concat(escola))
console.log('Escola: '.concat(escola).concat(' - curso de Java Script'))
console.log('Escola: ' + escola + ' - curso de Java Script')
console.log(escola.replace(3, 'e')) //trocou a letra '3' por 'e'
console.log('dario,mayra,serena'.split(','))



