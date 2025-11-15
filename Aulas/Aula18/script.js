/*const namorada = {
    comidasFav: ["Feijoada,", "Açai", " e Escondidinho de Batata."],
    informacoes: {
        nome: "Rafaella",
        idade: 15,
        melhorAmigo: "Cauã"
    }
}

console.log("O nome da pessoa é", namorada.informacoes.nome, "e suas comidas preferidas são", namorada.comidasFav = namorada.comidasFav.join(", "), "Seu melhor amigo se chama", namorada.informacoes.melhorAmigo, "e tem", namorada.informacoes.idade, "anos.")

const arrayPersonagens = [
    { nome: "Naruto", idade: 16, estilo: "Ninjutsu", jutsus: "Vortex de Água, Técnica Harém, Bomba Bijuu" },
    { nome: "Hinata", idade: 16, estilo: "Taijutsu", jutsus: "Byakungan, Palma Inferior, Punho Suave" },
    { nome: "Sakura", idade: 16, estilo: "Taijutsu", jutsus: "Atemi, Queda do Tronco, Técnica de Transformação" }

]

function adicionarPersonagem() {
    arrayPersonagens.push(
        { nome: "Sasuke", idade: 16, estilo: "Kenjutsu", jutsus: "Libertação de Fogo, Libertação de Raio, Kirin" }
    )

}
adicionarPersonagem()

function buscarPersonagem() {
    let personagem = prompt("Escolha um personagem")
    return personagem
}
buscarPersonagem()

if (arrayPersonagens.includes(personagem)){
    console.log(arrayPersonagens[0].nome)
}



const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco:[
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissoesHoje:[
        {canal: "Telecine", horario: "21"},
        {canal: "Canal Brasil", horario: "19"},
        {canal: "Globo", horario: "14"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/* vai ser impresso:

Matheus Nachtergaele
Virginia Cavendish
Object
canal: "Canal Globo"
horario: "14"


const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

 será impresso é:
Objeto
nome: Juca
idade: 3
raca: SRD
Objeto
nome: Juba
idade: 3
raca: SRD
Objeto
nome: Goto
idade: 3
raca: SRD
*/


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

/*vai ser impresso no console:
*/