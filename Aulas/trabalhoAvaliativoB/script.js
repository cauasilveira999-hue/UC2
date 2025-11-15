// array de personagens
const arrayPersonagens = [
    {
        nome: "Frodo",
        classe: "Ladino",
        nivel: 5,
        HP: 100,
        habilidades: ["Vontade de Ferro", "Furtividade Hobbit", "Coragem Inesperada", "Portador do Um Anel"],
        historicoAcoes: [],
        acoes: ["Atacar", "Defender", "Usar Habilidades"]
    },
    {
        nome: "Sam",
        classe: "Guerreiro",
        nivel: 6,
        HP: 100,
        habilidades: ["Lealdade Inabálavel", "Força dos Simples", "Golpe da Panela", "Luz de Galadriel"],
        historicoAcoes: [],
        acoes: ["Atacar", "Defender", "Usar Habilidades"]
    },
    {
        nome: "Meriadoc",
        classe: "Guerreiro",
        nivel: 4,
        HP: 100,
        habilidades: ["Coragem Hobbit", "Ataque contra as Sombras", "Cavaleiro Honorário"],
        historicoAcoes: [],
        acoes: ["Atacar", "Defender", "Usar Habilidades"]

    },
    {
        nome: "Aragorn",
        classe: "Herói",
        nivel: 12,
        HP: 150,
        habilidades: ["Rastreamento Perfeito", "Cura Dúnedain", "Espada De Elendil", "Lideranca Natural", "Mestre Espadachim"],
        historicoAcoes: [],
        acoes: ["Atacar", "Defender", "Usar Habilidades"]
    },
]

// funções de ações e historico de ações dos personagens

// Frodo
function atacarFrodo() {
    arrayPersonagens.historicoAcoes[0].push("Frodo Atacou!")
}
atacarFrodo()

function defenderFrodo() {
    arrayPersonagens.historicoAcoes[0].push("Frodo se Defendeu!")
}

function usarHabilidadeFrodo() {
    arrayPersonagens.historicoAcoes[0].push("Frodo usou uma Habilidade!")
}
usarHabilidadeFrodo()

// Sam
function atacarSam() {
    arrayPersonagens.historicoAcoes[1].push("Sam Atacou!")
}
atacarSam()

function defenderSam() {
    arrayPersonagens.historicoAcoes[1].push("Sam se Defendeu!")
}
defenderSam()

function usarHabilidadeSam() {
    arrayPersonagens.historicoAcoes[1].push("Sam usou uma Habilidade!")
}

// Meriadoc

function atacarMeriadoc() {
    arrayPersonagens.historicoAcoes[2].push("Meriadoc Atacou!")
}
atacarMeriadoc()

function defenderMeriadoc() {
    arrayPersonagens.historicoAcoes[2].push("Meriadoc se Defendeu!")
}
defenderMeriadoc()

function usarHabilidadeMeriadoc() {
    arrayPersonagens.historicoAcoes[2].push("Meriadoc usou uma Habilidade!")
}

// Aragorn

function atacarAragorn() {
    arrayPersonagens.historicoAcoes[3].push("Frodo Atacou!")
}
atacarAragorn(), atacarAragorn()

function defenderAragorn() {
    arrayPersonagens.historicoAcoes[3].push("Frodo se Defendeu!")
}

function usarHabilidadeAragorn() {
    arrayPersonagens.historicoAcoes[3].push("Aragorn usou uma Habilidade!")
}
usarHabilidadeAragorn()
// Função de Busca de personagem

function buscarPersonagem(nome) {
    return arrayPersonagens.find(p => p === nome)
}

let qualPersonagem = prompt("Qual personagem você quer buscar entre: Frodo, Sam, Meriadoc, Aragorn")
console.log(buscarPersonagem(qualPersonagem))


// deletar personagens
arrayPersonagens.splice(1, 1)

// listando personagens

console.log(arrayPersonagens)

// verificar status do personagem

console.log(arrayPersonagens.hp[0])
console.log(arrayPersonagens.hp[1])
console.log(arrayPersonagens.hp[2])
console.log(arrayPersonagens.hp[3])

console.log(arrayPersonagens.habilidades[0])
console.log(arrayPersonagens.habilidades[1])
console.log(arrayPersonagens.habilidades[2])
console.log(arrayPersonagens.habilidades[3])