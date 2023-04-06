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

console.log("Boas vindas ao jogo BlackJack!")
const inicio = confirm("Quer iniciar uma nova rodada?")

const jogadorCarta1 = comprarCarta()
const jogadorCarta2 = comprarCarta()
const jogadorMaisUma = comprarCarta()
const jogadorTotal = jogadorCarta1.valor + jogadorCarta2.valor
const jogadorTotalMaisUminha = jogadorCarta1.valor + jogadorCarta2.valor + jogadorMaisUma.valor


const pcCarta1 = comprarCarta()
const pcCarta2 = comprarCarta()
const pcMaisUma = comprarCarta()
const pcTotal = pcCarta1.valor + pcCarta2.valor
const pcTotalMaisUminha = pcCarta1.valor + pcCarta2.valor + pcMaisUma.valor



if (inicio === true) {
   console.log("Usuario - Cartas: ", jogadorCarta1.texto, "-Pontuação:", jogadorCarta1.valor)
   console.log("Computador - Cartas: ", pcCarta1.texto, "-Pontuação: ", pcCarta1.valor)

   if (confirm("Quer mais uma carta?")) {


      console.log("Usuario - Cartas: ", jogadorCarta1.texto, jogadorCarta2.texto, "-Pontuação:", jogadorCarta1.valor + jogadorCarta2.valor)
      console.log("Computador - Cartas: ", pcCarta1.texto, pcCarta2.texto, "-Pontuação: ", pcCarta1.valor + pcCarta2.valor)

      if (confirm("Mais uminha?")) {

         console.log("Usuario - Cartas: ", jogadorCarta1.texto, jogadorCarta2.texto, jogadorMaisUma.texto, "-Pontuação:", jogadorCarta1.valor + jogadorCarta2.valor + jogadorMaisUma.valor)
         console.log("Computador - Cartas: ", pcCarta1.texto, pcCarta2.texto, pcMaisUma.texto, "-Pontuação: ", pcCarta1.valor + pcCarta2.valor + pcMaisUma.valor)
         
         if (jogadorTotalMaisUminha > pcTotalMaisUminha && jogadorTotalMaisUminha <= 21) {
            console.log('Jogador ganhou.')
         } else if (jogadorTotalMaisUminha === pcTotalMaisUminha) {
            console.log('Jogo empatado.')
         } else if (pcTotalMaisUminha > jogadorTotalMaisUminha && pcTotalMaisUminha <= 21) {
            console.log("O computador ganhou.")
         }

      } else {
         if (jogadorTotal > pcTotal && jogadorTotal <= 21) {
            console.log('Jogador ganhou.')
         } else if (jogadorTotal === pcTotal) {
            console.log('Jogo empatado.')
         } else if (pcTotal > jogadorTotal && pcTotal <= 21) {
            console.log("O computador ganhou.")
         }
      }
   } else {
      if(jogadorCarta1.valor > pcCarta1.valor && jogadorCarta1.valor <= 21) {
         console.log("Jogador ganhou.")
      }else if (jogadorCarta1.valor === pcCarta1.valor) {
         console.log("Jogo empatado.")
      } else if (pcCarta1.valor > jogadorCarta1.valor && pcCarta1.valor <= 21) {
         console.log("O computador ganhou.")
      }
   }
} else {
   console.log("O jogo acabou.")
} 