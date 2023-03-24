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
// Dar boas vindas ao jogo
console.log('Boas vindas ao BlackJack!')

// Questionar usuario se deseja iniciar nova rodada
const iniciarNovaRodada = confirm('Gostaria de iniciar uma nova rodada?')

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const usuarioTotal = cartaUsuario1.valor + cartaUsuario2.valor
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()
const computadorTotal = cartaComputador1.valor + cartaComputador2.valor

const novaRodada = () => {
   if (iniciarNovaRodada === false) {
      console.log('Fim de jogo!')
   } else {
      console.log(`Cartas usuario: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${usuarioTotal}`)
      console.log(`Cartas computador: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${computadorTotal}`)
   }
   if (usuarioTotal > computadorTotal && usuarioTotal <= 21) {
      console.log('O usuario ganhou!')
   } else if (computadorTotal > usuarioTotal && computadorTotal <= 21) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate')
   }

}
novaRodada()