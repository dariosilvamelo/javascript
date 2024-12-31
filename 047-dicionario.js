const produto1 = {}
produto1.nome = 'Celular'
produto1.preco = 5.000
console.log(produto1)
produto1['desconto'] = 10 //também pode usar esta anotação
console.log(produto1)

const produto2 = {
    nome: 'Celular2',
    preco: 6.000,
    desconto: 5,
    fabricante: {
        nome: 'nokia',
        ano: 2024
    }
}
console.log(produto2)
produto2.fabricante.modelo = 'galax'
console.log(produto2)


