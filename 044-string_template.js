const nome = 'Dário da Silva Melo'
const fone = '(034) 99199 8303'
const email = 'dario@retirodaroca.com'
const empresa = 'retiro da roça'
// o template aceita chamar funções.
const funcao_texto_maisculo = parametro => parametro.toUpperCase() // Exemplo de função
const template = `
============================================================================
                             Nome.......: ${nome}
                             Fone.......: ${fone}
                             E-mail.....: ${email}
                             Idade......: ${2024 - 1977}
                             Empresa....: ${funcao_texto_maisculo(empresa)}
============================================================================
`
console.log(template)

