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
somaNumeros()*/ 

let resultado
let somaNumeros = () =>  {
    resultado = 3 * 2
    console.log("O resultado é:", resultado)
}
somaNumeros()