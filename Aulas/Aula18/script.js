/*const namorada = {
    comidasFav: ["Feijoada,", "Açai", " e Escondidinho de Batata."],
    informacoes: {
        nome: "Rafaella",
        idade: 15,
        melhorAmigo: "Cauã"
    }
}

console.log("O nome da pessoa é", namorada.informacoes.nome, "e suas comidas preferidas são", namorada.comidasFav = namorada.comidasFav.join(", "), "Seu melhor amigo se chama", namorada.informacoes.melhorAmigo, "e tem", namorada.informacoes.idade, "anos.")*/

const arrayPersonagens = [
    { nome: "Naruto", idade: 16, estilo: "Taijutsu", jutsus: "Vortex de Água, Técnica Harém, Bomba Bijuu" },
    { nome: "Hinata", idade: 16, estilo: "Taijutsu", jutsus: "Byakungan, Palma Inferior, Punho Suave" },
    { nome: "Sakura", idade: 16, estilo: "Taijutsu", jutsus: "Atemi, Queda do Tronco, Técnica de Transformação" }


]

function adicionarPersonagem() {
    arrayPersonagens.push(
        { nome: "Sasuke", idade: 16, estilo: "Kenjutsu", jutsus: "Libertação de Fogo, Libertação de Raio, Kirin" }
    )

}
adicionarPersonagem()

console.log(arrayPersonagens)