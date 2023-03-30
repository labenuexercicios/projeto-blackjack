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

    console.log(`Bem vindo(a) ao jogo BlackJack!`)
    const novaRodada = confirm(`Deseja iniciar uma nova rodada?`)

  function iniciarJogo(){
   if (novaRodada){
      let cartaJogador1 = comprarCarta()
      let cartaJogador2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      let pontosJogador = cartaJogador1.valor + cartaJogador2.valor
      let pontosComputador = cartaComputador1.valor + cartaComputador2.valor 

      console.log(`Usuário - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto} -Pontuação: ${pontosJogador}`)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto}- Pontuação: ${pontosComputador}`)
      if (pontosJogador > pontosComputador && pontosJogador<=21){
         console.log(`Você ganhou!`)

      }else if(pontosJogador < pontosComputador && pontosComputador<=21){
         console.log(`Você perdeu!`)
      }else if(pontosJogador === pontosComputador){
         console.log(`Empate!`)
      }else if(pontosJogador>21){
         console.log(`Você perdeu!`)
      }else if(pontosComputador>21){
         console.log(`O computador perdeu!`)
      }
   } 
   else{
      console.log(`O jogo acabou.`)
   }
  }  



  iniciarJogo()