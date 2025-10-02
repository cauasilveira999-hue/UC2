const interruptor1 = true
const interruptor2 = false
/*
const resultado = interruptor1 && interruptor2
console.log(resultado)

// exercicios

const a = true
const b = false
const c = true

const resultado = a && b
console.log(resultado) // false

const resultado2 = b && c
console.log(resultado2) // false

const resultado3 = a && c
console.log(resultado3) // true

const resultado4 = a && b && c
console.log(resultado4) // false


const resultado = interruptor1 || interruptor2
console.log(resultado)


const resultado = interruptor1 | interruptor2
console.log(resultado)



let nome 
let anoNascimento
let maiorDeIdade = false
let anoAtual = 2025
let idade
let idade2050
let ano2050 = 2050

nome = prompt("Qual seu nome?")
anoNascimento = prompt("Qual seu ano de nascimento?")
anoAtual = prompt("Qual ano atual?")
anoNascimento = Number(anoNascimento)
anoAtual = Number(anoAtual)

console.log(idade = anoAtual - anoNascimento)
console.log(idade2050 = ano2050 - anoNascimento)

console.log("Qual seu nome?:", nome, "Qual sua idade?:", idade, "Você é maior de idade?:", maiorDeIdade, "Idade em 2050:", idade2050)
*/

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
