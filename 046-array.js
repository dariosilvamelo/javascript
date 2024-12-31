const valores = [47, 100.50, 1.75, 77]
console.log(valores[2])
console.log(valores[4])
valores[4] = 10
console.log(valores)
console.log(valores)
valores.push({ 'id': 3 }, false, null, 'teste', 'dario') // um array pode ter varios tipos de valores
console.log(valores)
valores.pop()// apaga o ultimo valor do array
console.log(valores)
delete valores[0] // apaga o valor deacordo com o indice
console.log(valores)
console.log(typeof valores) // o array tem o tipo do object