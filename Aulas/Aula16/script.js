/* declaraçao da funçao
function imprimirOlaMundo() {
    console.log("Olá Mundo!")
}
// imprimir Olá Mundo

 imprimirOlaMundo()


function imprimaBemVindo() {
    console.log("Bem vindo a turma 25-2N!")
}
imprimaBemVindo()


let resultado
function numeros() {
    resultado = 3 * 2
    console.log("O resultado é:", resultado)
}
numeros()

function nomes(nome) {
    const frase = (`Olá ${nome}`)
    console.log(frase)
}
nomes("Cauã"), nomes("Rafaella"), nomes("Antony")

function soma(num1, num2) {
    let soma = num1 + num2
    console.log(soma)
}
soma(1), soma(2)

// escopo global

const a = 1
function imprimeVariavel() {
    // escopo local
    const b = 2
    console.log("A variavel A:", a)
    console.log("A variavel B:", b)
}
// escopo global
imprimeVariavel()

console.log("A variavel A:", a)
console.log("A variavel B:", b)

function calculaArea(altura, largura) {
    let area = altura * largura
   
    // tira a variavel do escopo local e bota no global 
   return area
}

let resultadoArea = calculaArea(2,3)
console.log(calculaArea(2,3))

function numeros(num1, num2) {
    let retorno = num1 + num2
    return retorno
}
numeros()
console.log(numeros(1,4))


let meuArray = [10, 2, 4, 5]
function array(meuArray) {
   let novoArray = []
   novoArray.push(array[0] /2)
   novoArray.push(array[array.length -1] /2)
 return novoArray
}

array()
console.log(array(meuArray))

let resultado
let somaNumeros = function() {
    resultado = 2 + 5
console.log("A soma é:", resultado)
}
somaNumeros()

let resultado
let somaNumeros = () =>  {
    resultado = 3 * 2
    console.log("O resultado é:", resultado)
}
somaNumeros()


function determineMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) {
    }
determineMonstro(true), determineMonstro(false), determineMonstro(true), determineMonstro(true)

if(determineMonstro){
    
}*/

/* 
function minhaFuncao(variavel) {
    return variavel * 5
}

(minhaFuncao(2))
(minhaFuncao(10))
será impresso no console o resultado da multiplicação
de 2 e 10 vezes 5

// não exibiria nada, apenas um erro

let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto){
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a função verifica se a resposta do usuario é "cenoura"
// true, true, true


function minhaFuncao() {
    console.log("Eu sou Cauã, tenho 16 anos moro em Sapucaia do Sul e sou estudante.")
}
minhaFuncao()


function numeros(num1, num2) {
   let soma = num1 + num2 
   return soma
}
numeros()
console.log(numeros(2,5))

function numeros(num1, num2) {
    let comparar = num1 >= num2 
    return comparar
 }
 numeros()
 console.log(numeros(4,5))

function pares(numero) { 
    return numero % 2 === 0
}
pares()
console.log(pares(4))

function mensagem(frase) {
   console.log("Tamanho da mensagem", frase.length)
   console.log("Mensagem em letras maiusculas:", frase.toUpperCase())
}
mensagem("Oi, sou o Cauã")*/

