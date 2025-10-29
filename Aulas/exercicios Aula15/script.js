/*let numeros = [100, 7, 4, 8, 10, 3, 20, 777, 2000]

for(let numero of numeros){
    console.log("O numero é:", numero)

}

let mensagens = ["Oi", "sumido", "tudo", "bem?"]
let frase = ""
for(let mensagem of mensagens){
 //let frase = mensagem
 frase += mensagem + " "
    
}
console.log(frase)

let valor = 0
    for(let i = 0; i < 5; i++){
        valor += i
    }

    console.log(valor)

/* vai fazer um looping até atingir um numero maior que 5, ou seja, 10

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for(let numero of lista){
    if (numero > 18){
        console.log(numero)
    }
} 
/* vai ser impresso numeros da lista maiores que 18 
depende, acessar um em especifico não, mas fazer um looping que imprima
todos os indices é possivel


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0

 while(quantidadeAtual < quantidadeTotal){
let linha = " "
 
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
linha += "*"
}
console.log(linha)
quantidadeAtual++

}

// o resultado seria um looping até atingir 4 asteriscos/linhas
*/


let bixosEstimacao = Number(prompt("Quantos animais de estimaçâo você tem?"))
let nomeBixinhos
let bixinhos = []
if (bixosEstimacao <= 0) {
    console.log("Que pena! Você pode adotar um pet!")

}
else if (bixosEstimacao > 0) {
    for (let i = 0; i < bixosEstimacao; i++) {
        nomeBixinhos = prompt("Digite o nome dos seus bixinhos")
        bixinhos.push(nomeBixinhos)
    }// termina o looping laço
    console.log(bixinhos)

}