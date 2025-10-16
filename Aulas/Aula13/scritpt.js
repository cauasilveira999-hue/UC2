/*let condicao1 = true
let condicao2 = false

if(condicao1&&condicao2){
    console.log("Executou o if do operador && AND")
}
    if(condicao1 || condicao2){
    console.log("Executou o if do operador || OR")
}
    if(condicao2){
    console.log("Executou o if do operador")
}


let idade = prompt("Qual a sua idade?")
let ensinoMedio = prompt("Você concluiu o ensino médio?")
let faculdade = prompt("Está cursando outra faculdade?")

if(idade>=18 && ensinoMedio === 'sim' && faculdade === 'não'){
    console.log("Você pode entrar na faculdade")
}

else {
    console.log("Você não pode entrar na faculdade")
}*/


const respostaDoUsuario = prompt("Digite o numero que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0){
    console.log("Passou no teste")
} else {
    console.log("Não passou no teste.")
}
/* o codigo pega o numero digitado pelo usuario
e vê se ele é par, se o numero for par o usuario passou*/

// numeros pares
// numeros impares