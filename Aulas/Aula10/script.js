/*const nome =  "Cauã"
const idade = 16
 // exemplo aspas duplas
const frase = " Meu nome é " + nome + " e minha idade é " + idade
console.log(frase)
console.log(typeof (frase))

// aspas simples

const frase2 = ' meu nome é ' + nome + ' e minha idade é' + idade
console.log(typeof (frase2))
console.log(frase2)
// template

const frase3 = ` O meu nome é ${nome} e a minha idade é ${idade} `
console.log(typeof (frase2))
console.log(frase3)


let nome = prompt("Qual seu nome?")
let corFav = prompt("Qual sua cor favorita?")
let frase = (" A cor favorita do " + nome + " é " + corFav)
console.log(frase)
console.log(typeof(frase))


let nome = prompt("Qual seu nome?")
let corFav = prompt("Qual sua cor favorita?")
let frase = ('A cor favorita do ' + nome + ' é ' + corFav)
console.log(frase)
console.log(typeof(frase))


let nome = prompt("Qual seu nome?")
let corFav = prompt("Qual sua cor favorita?")
let frase = `A cor favorita do ${nome} é ${corFav}`
console.log(frase)
console.log(typeof(frase))


const nome = "Cauã Silveira Morales"
console.log(nome.length)

const frase = "OIieeeE"
const fraseMinuscula = frase.toLowerCase()
console.log(frase, fraseMinuscula)


const frase = "OIieeeE"
const fraseMaiuscula = frase.toUpperCase()
console.log(frase, fraseMaiuscula)

const nome = " Cauã Silveira Morales "
console.log(nome.trim())

const frase = "Hoje comi batata"
console.log(frase.includes("cenoura"))
console.log(frase.includes("batata"))
console.log(frase)

const frase = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura","batata")
console.log(novaFrase)*/

let frase = prompt("Escreva uma frase")
console.log(frase.toUpperCase())
const novaFrase = frase.replaceAll("o","i")
console.log(novaFrase)
console.log(frase.length)