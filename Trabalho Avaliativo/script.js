// a seguir as variaveis:
const picaretaVelocidadeDiamante = 80
const picaretaVelocidadeMadeira = 40
const picaretaVelocidadePedra = 60
const picaretaVelocidadeFerro = 70

const blocoMinerarDiamante = "Bloco de Diamante"
const blocoMinerarObsidiana = "Bloco de Madeira"
const blocoMinerarPedra = "Bloco de Pedra"
const blocoMinerarFerro = "Bloco de Ferro"

// estrutura de if/else da mineração
if(blocoMinerarDiamante){
    console.log("Use a picareta de ferro: Velocidade:", picaretaVelocidadeFerro)
} 

else if(blocoMinerarObsidiana){
    console.log("Use a picareta de diamante: Velocidade:", picaretaVelocidadeDiamante)
}

else if(blocoMinerarPedra){
    console.log("Use a picareta de Madeira: Velocidade:", picaretaVelocidadeMadeira)
}

else if(blocoMinerarFerro){
    console.log("Use a picareta de pedra: Velocidade:", picaretaVelocidadePedra)
}

else{
    console.log("Qualquer ferramenta funciona, mas a de madeira é a mais simples")
}

//variaveis da luta contra o Creeper 
let danoEspada = 6
let forcaEncantamento = 2
let armaduraInimiga = 5
let vidaInimiga = 20

let danoBruto = danoEspada * forcaEncantamento
let danoFinal = danoBruto - armaduraInimiga
vidaInimiga -= danoFinal

//Comparação Final utilizando if/else

if(vidaInimiga <= 0){
    console.log("O Creeper foi derrotado! Você sobreviveu à exploção")
}
else{
    console.log("O Creeper ainda está vivo com:", vidaInimiga, " . Corra!")
}

// variaveis do crafting
const temDiamantes = true
const nivelMesaCrafting = 2
const temGravetos = false
const temFerro = 10

// estrutura if/else do crafting

if(temDiamantes && temGravetos, nivelMesaCrafting <= 3, temFerro >= 8){
    console.log("Picareta de diamante criada! Hora de buscar Obsidiana")
}
else{
    console.log("Faltam recursos ou as condições de crafting não são atendidas!")
}