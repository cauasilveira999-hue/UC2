/* somando 3 com 4
primeiroValor = 3
segundoValor = 4
console.log(primeiroValor + segundoValor)

primeiroValor = 3
segundoValor = 5
console.log(primeiroValor * segundoValor) 
resultado = 15
console.log(resultado / 2)

primeiroValor = 5
segundoValor = 4
console.log(primeiroValor - segundoValor)
resultado = 1
console.log(resultado * -1)

const restoDaDivisao = 234 % 5
console.log(restoDaDivisao)
*/

// vendo se os numeros sao iguais
/*console.log("1"==="2")
console.log("2"==="2")
console.log(2==="2")*/

//vendo se os numeros sao diferentes
/*console.log("1"!=="2")
console.log("2"!=="2")
console.log(2!=="2")*/

//verificando se é maior
/*console.log(1>2)
console.log(2>2)
console.log(3>2)

console.log(1>=2)
console.log(2>=2)
console.log(3>=2)

//verificando se é menor
console.log(1<2)
console.log(2<2)
console.log(3<2)

console.log(1<=2)
console.log(2<=2)
console.log(3<=2)
*/

let primeiroNumero
let segundoNumero

primeiroNumero = prompt("Diga um numero")
segundoNumero = prompt("Diga outro numero")

console.log(primeiroNumero===segundoNumero)
console.log(primeiroNumero!==segundoNumero)
console.log(primeiroNumero>segundoNumero)
console.log(primeiroNumero<segundoNumero)

console.log("O primeiro numero é igual ao segundo?:",primeiroNumero===segundoNumero, "O primeiro numero é diferente do segundo?:", primeiroNumero!==segundoNumero, "O primeiro numero é maior que o segundo?:", primeiroNumero>segundoNumero, "O primeiro numero é menor que o segundo?:", primeiroNumero<segundoNumero)