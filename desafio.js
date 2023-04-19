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

    //Inicio da partida
const novoJogo = confirm(`Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)

if (novoJogo === false) {
   alert(`O jogo acabou`)
} else {
   //comprando primeiras cartas dos jogadores e armazenando em array
   let cartasJogador = []
   let cartasComputador = []

   const comprarCartasJogador = () => {
      cartasJogador.push(comprarCarta())
      return cartasJogador
   }
   comprarCartasJogador()
   comprarCartasJogador()

   const comprarCartasComputador = () => {
      cartasComputador.push(comprarCarta())
      return cartasComputador
   }
   comprarCartasComputador()
   comprarCartasComputador()
   //console.log(cartasJogador[0].texto, cartasJogador[1].texto)
   //console.log(cartasComputador[0].texto, cartasComputador[1].texto)

   //1 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.
   if (cartasJogador[0].valor + cartasJogador[1].valor === 22) {
      cartasJogador = [comprarCartasJogador(), comprarCartasJogador()]
   }
   if (cartasComputador[0].valor + cartasComputador[1].valor === 22) {
      cartasComputador = [comprarCartasComputador(), comprarCartasComputador()]
   }
   // console.log(cartasJogador[0].texto)
   // console.log(cartasJogador[1].texto)
   // console.log(cartasJogador.length)
   // console.log(cartasJogador)
   // console.log(cartasComputador)

   //2 - Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta.
   
console.log(cartasJogador)

let cartasJogadore = []

   for (var i = 0; i <= cartasJogadore.length; i++) {
      cartasJogador  = cartasJogadore[1].texto
   }
   
   let resultado = confirm(`Suas cartas são: ${cartasJogadore}. a carta revelada do computador é ${cartasComputador[0].texto}. \nDeseja comprar mais uma carta?`)

   


   //3 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu.

   

   
}
