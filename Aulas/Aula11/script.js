/*let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9


const frase = prompt("Digite uma frase") // o usuario vai digitar uma frase

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) /* a frase do usuario
vai ficar em letras maiusculas e todos os "A" vão se transformar em "I", após isso o console
vai mostrar o tamanho da frase

// a frase vai ser imprimida assim: SUBI NUM ÔNIBUS EM MIRROCOS 28


let email = prompt("Qual seu email?")
let nome = prompt("Qual seu nome?")

const frase = ` O email do usuario é ${email} , Seja bem vindo ${nome} `
console.log(frase) 

let comidasFav = ["Hamburguer", "Pizza", "Escondidinho de Batata"]
console.log(comidasFav)

const primeiroItem = comidasFav[0]
const segundoItem = comidasFav[1]
const terceiroItem = comidasFav[2]

console.log("Essas são as minhas comidas favoritas:")
console.log(primeiroItem)
console.log(segundoItem)
console.log(terceiroItem)

let pergunta = prompt("Qual a sua comida favorita?")

console.log(comidasFav [1] = pergunta)

console.log("Essas são minhas novas comidas favoritas:")
console.log(comidasFav)

let listaDeTarefas = []
let pergunta1 = prompt("Diga uma tarefa do seu dia a dia")
let pergunta2 = prompt("Diga uma outra tarefa do seu dia a dia")
let pergunta3 = prompt("Diga mais uma tarefa do seu dia a dia")

listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)

console.log(listaDeTarefas)

let pergunta4 = prompt("Qual tarefa você já fez? De 0 a 2")
listaDeTarefas.splice(pergunta4, 1)
console.log(listaDeTarefas)*/

let frase = prompt("Digite uma frase")
const semEspacos = frase.trim()
const arrayPalavras = frase.split(semEspacos)

const resultado = arrayPalavras
console.log(resultado)