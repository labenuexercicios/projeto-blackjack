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
   
   
    const blackjack = () => {
      const boasVindas = 'Boas vindas ao jogo Black Jack!'
      console.log(boasVindas)
      
      if(confirm('Quer iniciar uma nova rodada?')){
         //variaveis que recebem as cartas
         let carta1Usuario = comprarCarta()
         let carta2Usuario = comprarCarta()
         let carta1Computador = comprarCarta()
         let carta2Computador = comprarCarta()
         
         //atribuir os valores as cartas
         let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
         let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor
         
         //console.log que exibe as pontuações
         console.log(`usuário - ${carta1Usuario.texto} + ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
         console.log(`computador - ${carta1Computador.texto} + ${carta2Computador.texto} - ${pontuacaoComputador}`)        
         
         if(pontuacaoUsuario > pontuacaoComputador){
            console.log('o usuário venceu!')
         }else if(pontuacaoUsuario < pontuacaoComputador){
            console.log('o computador venceu. Boa sorte na proxima tentativa!')
         }else if(pontuacaoUsuario === pontuacaoComputador){
            console.log('empate!')
      }
      
      }else{
         const cancelaJogo = 'O jogo acabou, esperamos vê-lo em breve!.'
         console.log(cancelaJogo)
   }
   
    }
    blackjack()