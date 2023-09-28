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


console.log("Bem-vindo(a) ao jogo de blackjack");

const querJogar = confirm("Deseja iniciar uma nova rodada?")

const usuario1 = comprarCarta();
const usuario2 = comprarCarta();
const computador1 = comprarCarta();
const computador2 = comprarCarta();

const somaUsuario = usuario1.valor + usuario1.valor
const somaComputador = computador1.valor + computador2.valor

if (querJogar) {
   console.log(`Usuário - cartas:  ${usuario1.texto} ${usuario1.texto}  -  Pontuaçäo ${somaUsuario}`)
   console.log(`Computador - cartas:  ${computador1.texto} ${computador2.texto} - Pontuaçäo ${somaComputador}`)

   if (somaUsuario > somaComputador) {
      console.log(" O usuário ganhou!")
   } else if (somaComputador > somaUsuario) {
      console.log("O computador ganhou!")
   } else if (somaUsuario === somaComputador) {
      console.log("Empate!")
   } else {
      console.log("O jogo acabou")
   }

}