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
}


const respostaDoUsuario = prompt("Digite o numero que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0){
    console.log("Passou no teste")
} else {
    console.log("Não passou no teste.")
}
/* o codigo pega o numero digitado pelo usuario
e vê se ele é par, se o numero for par o usuario passou

// numeros pares
// numeros impares



let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta){
    case "Laranja":
        preco = 3.5
        break

        case "Maça":
            preco = 2.25
            break

            case "Uva":
            preco = 0.30
            break

            case "Pêra":
                preco = 5.5
                break // BREAK PARA O ITEM c.
                default:
                    preco = 5
                    break
}

console.log(" O preço da fruta ", fruta, " é ", "R$", preco)

// a) O codigo serve para um usuario pesquisar uma fruta e saber o preço

// b) O preço da fruta Maça é R$ 2.25

// c) Vai aparecer normalmente
*/

const numero = Number(prompt("Digite o primeiro numero."))

if(numero > 0){
    console.log("Esse numero passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) Convertendo a string do prompt em Number
/* b) O terminal ira exibir "Esse numero passou no teste" e a mensagem secreta 
se for -10 não ira exibir nada por não ter "else" e dar erro na mensagem*/ 