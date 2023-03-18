/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log(`Boas vindas ao jogo de Blackjack!`)
const novoJogo = confirm(`Quer iniciar uma nova rodada?`)

if(novoJogo === false){
   console.log(`O jogo acabou.`)
} else {
   const carta1Usuario = comprarCarta()
   const carta2Usuario = comprarCarta()
   const pontosUsuario = carta1Usuario.valor + carta2Usuario.valor
console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontosUsuario}`)

   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()
   const pontosComputador  = carta1Computador.valor + carta2Computador.valor
console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontosComputador }`)
      if (pontosUsuario > pontosComputador && pontosUsuario <= 21){
         console.log(`O usuário ganhou!`)
      } if (pontosComputador > pontosUsuario && pontosComputador <= 21){
         console.log(`O computador ganhou!`)
      } if (pontosComputador === pontosUsuario) {
         console.log(`Empate`)
      }
}
// const carta = comprarCarta()
// console.log(carta)
// console.log(carta.texto)
// console.log(carta.valor)