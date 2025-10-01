/*ouroTotal = 75000
membrosTripulacao = 9
recompensaBaseLuffy = 3000000000
aumentoRecompensa = 150000000
bonusExperiencia = 500
forcaTripulacao = 95

// ouro por membro
console.log(ouroTotal / membrosTripulacao) 

// resto do ouro
const restoDaDivisao = 7500 % 9
console.log(restoDaDivisao) // 3

// nova recompensa base do Luffy
console.log(recompensaBaseLuffy + aumentoRecompensa) // 3015000000
novaRecompensa = 3015000000
// poder do Luffy
console.log(recompensaBaseLuffy * bonusExperiencia) // 1500000000000

// redução do aumento
console.log(aumentoRecompensa - 5000000)
*/

forcaInimigo = 120
chanceVitoria = 0.7
limiteSeguranca = 0.8
temAkumaNoMi = true
inimigoTemHaki = true
combateJusto = "sim"
combateRapido = "sim"

console.log("Força do inimigo:", forcaInimigo, "Chance de vitoria:", chanceVitoria, "Limite de segurança:", limiteSeguranca, "Tem AkumaNoMi:", temAkumaNoMi, "O inimigo tem Haki:", inimigoTemHaki, "Combate Justo:", combateJusto, "Combate rapido:", combateRapido)

podeVencer = false
console.log(forcaTripulacao >= forcaInimigo) // não

riscoAlto = true
console.log(chanceVitoria < limiteSeguranca) // sim

batalhaFacil = true
console.log(combateJusto === combateRapido) // sim

console.log("Pode vencer?:", podeVencer, "Tem alto risco?:", riscoAlto, "A batalha é facil?:", batalhaFacil)