/* 
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

function desafioJogo21() {

// declaração jogadores 
let usuario = []
let computador = []

let blackjackDesafio = confirm (`Bem vindo ao Blackjack! \nDeseja iniciar uma nova rodada?`)

if (blackjackDesafio) {

   let cartasDoJogo = false

   // início jogo e primeira compra de cartas
   while (!cartasDoJogo) {

      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())

      // condição duplo ases:
      if((usuario[0].valor === 11 && usuario[1].valor === 11 || computador[0].valor === 11 && computador[1].valor === 11)) {

         usuario = []
         computador = []
      } else {
         cartasDoJogo = true
      }
   }

   let cartaTextoUsuario = `Jogador: `
   let cartaTextoComputador = `Computador: `
   let pontuacaoUsuario = 0
   let pontuacaoComputador = 0

   // Pontuação:
   for (let i = 0; i < usuario.length ; i++){
      cartaTextoUsuario += usuario[i].texto + ``
      pontuacaoUsuario += usuario[i].valor
   }

   for (let j = 0; j < computador.length ; j++){
      cartaTextoComputador += computador[j].texto + ``
      pontuacaoComputador += computador[j].valor
   }

   // Primeira parcial e compra de cartas:
   let comprarCartaGame = true

   while (comprarCartaGame) {
      if (pontuacaoUsuario >= 21) {
         break
      }

      let resposta = confirm (`Jogo: \n${cartaTextoUsuario}. \nResultado parcial: ${pontuacaoUsuario} \nA carta revelada do computador é ${computador[0].texto}. \nDeseja comprar mais uma carta?`)

      if(resposta) {

         let comprarCarta2 = comprarCarta()
         usuario.push(comprarCarta2)
         pontuacaoUsuario += comprarCarta2.valor
         cartaTextoUsuario += `${comprarCarta2.texto}`

      } else {
         comprarCartaGame = false
      }
   }

   // Compra de cartas computador:
   while (pontuacaoComputador < pontuacaoUsuario && pontuacaoComputador < 21) {

      let comprarCarta3 = comprarCarta()
      computador.push(comprarCarta3)
      pontuacaoComputador += comprarCarta3.valor
      cartaTextoComputador += `${comprarCarta3.texto}`
   }

   // anúncio de resultados:
   alert (`Fim de jogo! \n${cartaTextoUsuario} \nPontuação do Jogador: ${pontuacaoUsuario} \n${cartaTextoComputador} \nPontuação do Computador: ${pontuacaoComputador}`)

   // condicionante de resultados:
   if (((pontuacaoUsuario > pontuacaoComputador) && pontuacaoUsuario <= 21) || (pontuacaoComputador > 21 && pontuacaoUsuario <= 21)){

      alert(`Você ganhou!`)

   } else if (((pontuacaoComputador > pontuacaoUsuario) && pontuacaoComputador <= 21) || (pontuacaoUsuario > 21 && pontuacaoComputador <= 21)) {

      alert (`Computador ganhou.`)

   } else if (pontuacaoComputador > 21 && pontuacaoUsuario > 21) {

      alert (`Estouro duplo!`)

   }
    else { 

      alert (`Empate`)

   }

// Fim do jogo
} else {
   alert (`Fim do jogo! Para iniciar uma nova rodada, atualize a página.`)
}
}
desafioJogo21()