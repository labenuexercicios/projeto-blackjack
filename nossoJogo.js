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
let BlackJack =confirm("Estar pronto para jogar Black Jack")

if (BlackJack){
      let carta1jogador = comprarCarta()
      let carta2jogador = comprarCarta()
      let carta1pc = comprarCarta()
      let carta2pc = comprarCarta()

      let pontosJogador = carta1jogador.valor + carta2jogador.valor
      let pontosPC = carta1pc.valor + carta2pc.valor

      console.log(`Cartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${pontosJogador}`)
      console.log(`Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${pontosPC}`)

      if (pontosJogador > pontosPC){
         console.log("O jogador ganhou!")
         alert(`Você ganhou! \n Cartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${pontosJogador} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${pontosPC}`)
      }else if(pontosPC > pontosJogador){
         console.log("O jogador perdeu!")
         alert(`Você perdeu! \nCartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${pontosJogador} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${pontosPC}`)
      }else if( pontosJogador === pontosPC){
         console.log("Empate!")
         alert(`Empate! \nCartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${pontosJogador} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${pontosPC}`)
      }
   }

else(alert("O jogo acabou"))