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
function comecoDoJogo() {
   if (confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?") == true) {
      let cartasUsuario1 = comprarCarta()
      let cartasUsuario2 = comprarCarta()
      let cartasPc1 = comprarCarta()
      let cartasPc2 = comprarCarta()
      let calculoUsuario = cartasUsuario1.valor + cartasUsuario2.valor
      let calculoPc = cartasPc1.valor + cartasPc2.valor

      console.log(`Cartas do Usuário - ${cartasUsuario1.texto} e ${cartasUsuario2.texto} - ${calculoUsuario}`)
      console.log(`Cartas do Computador - ${cartasPc1.texto} e ${cartasPc2.texto} - ${calculoPc}`)

      if (calculoUsuario > calculoPc){
         console.log('Usuário ganhou ! ')
      }else if(calculoUsuario < calculoPc){
         console.log('Computador ganhou ! ')
      }else if(calculoUsuario === calculoPc){
         console.log('EMPATE')
      }
   }
   else {
      console.log('O jogo acabou ! ')
   }
}
comecoDoJogo()

