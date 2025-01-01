console.log('Exemplo 01: Diferença entre null e undefined')
let valor
console.log('valor = ', valor)
valor = null // ausencia de valor e não aponta para nada.
console.log('valor = ', valor)
const produto = {}
console.log('Preço = ', produto.preco)
console.log('Produto = ', produto)
produto.preco = 3.5
console.log('Produto = ', produto)
produto.preco = undefined // evite fazer isso
console.log('Produto = ', produto)
delete produto.preco
console.log('Produto = ', produto)
produto.preco = null /*ou "0" seria a forma mais correta. (não usar o undefined)
                       ou caso você não queira mais o atributo preço usa o "delete"
                       
                       Quando você coloca "0" é possivel usar outras 
                       funcionalidade (metidos que estão associados a um tipo
                       mas quanto você coloca "null" não tem como fazer nada.)
                       Ex: produto.preco.toFixed(2)-> ERRO se preço = null
                       */
console.log('Produto = ', produto)

console.log('=========================')
console.log('Exemplo 02: as vaeiaveis apontão para o endereço de mémoria')
console.log('            atribuição por referencia.')
a = { nome: 'Dário' }
console.log('a = ', a)
b = a // attribuição por referencia
console.log('b = ', b)

b.nome = 'Senena'
console.log('a = ', a)
console.log('b = ', b)

console.log('=========================')
console.log('Exemplo 03: Não é uma atribuição por referecia, mas sim uma "copia por valor"')
console.log('            o valor de "a" é um tipo primitivo (basico).')

a = 1
console.log('a = ', a)
b = a
console.log('b = ', b)

b = 2
console.log('a = ', a)
console.log('b = ', b)
console.log('=========================')