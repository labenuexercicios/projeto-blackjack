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

console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Quer iniciar uma nova rodada?") === true){
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const somaComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${somaUsuario}`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${somaComputador}`)

   if ((somaComputador === somaUsuario) || (somaComputador>21 && somaUsuario>21)){
      console.log("Empate!")
   }
   else if ((somaUsuario > somaComputador && somaUsuario<=21) || somaComputador>21){
      console.log("O usuário ganhou!")
   }
   else {
      console.log("O computador ganhou!")
   }

}
else {
   console.log("O jogo acabou")
}