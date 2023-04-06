
// PRIMEIRA PARTE - INICIO


console.log("Boas vindas ao jogo de BlackJack!.")
console.log("-----------------")

const start = confirm("Quer iniciar uma nova rodada?")

const carta1 = comprarCarta()
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()

let usuario = (carta1.valor + carta2.valor)
let pc = (carta3.valor + carta4.valor)

if (start) {

  console.log(`Suas cartas: ${carta1.texto}, ${carta2.texto} \nVoce fez ${usuario} pontos.\n \nCartas do computador: ${carta3.texto},${carta4.texto}\nComputador fez ${pc} pontos.`)

  console.log("\n")

  if (usuario > pc) {
    console.log("VOCE GANHOU!!! PARABÉNS.")
  }
  else if (pc > usuario) {
    console.log("Computador ganhou!Tente novamente.")
  }
  else if (usuario == pc) {
    console.log("Deu empate.Tente novamente.")
  }
} else {
  console.log("O jogo acabou")
}

// PRIMEIRA PARTE - FIM

// DESAFIO - INICIO