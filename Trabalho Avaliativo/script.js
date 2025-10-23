// a seguir as variaveis:
const picaretaVelocidadeDiamante = 80
const picaretaVelocidadeMadeira = 40
const picaretaVelocidadePedra = 60
const picaretaVelocidadeFerro = 70

const blocoMinerar = "Diamante"
//const blocoMinerar2 = "Minerio de Pedra"


// estrutura de if/else da mineração
if(blocoMinerar === 'Diamante' || 'Obsidiana'){
    console.log("Use a picareta de ferro: Velocidade:", picaretaVelocidadeFerro)
} 

else if(blocoMinerar === 'Minerio de Pedra'){
    console.log("Picareta de Pedra ou de Ferro é o ideal: Velocidade: Pedra", picaretaVelocidadePedra, ", Ferro:", picaretaVelocidadeFerro)
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
let nivelMesaCrafting = 2
const temGravetos = true
let temFerro = 10

// estrutura if/else do crafting

if((temGravetos && nivelMesaCrafting < 3) &&
(temDiamantes &&  temFerro >= 10)){
    console.log("Picareta de diamante criada! Hora de buscar Obsidiana")
} 
else{
    console.log("Faltam recursos ou as condições de crafting não são atendidas!")
}