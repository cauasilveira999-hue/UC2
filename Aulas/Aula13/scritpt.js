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
}*/


let idade = prompt("Qual a sua idade?")
let ensinoMedio = prompt("Você concluiu o ensino médio?")
let faculdade = prompt("Está cursando outra faculdade?")

if(idade>=18 && ensinoMedio === 'sim' && faculdade === 'não'){
    console.log("Você pode entrar na faculdade")
}

else {
    console.log("Você não pode entrar na faculdade")
}