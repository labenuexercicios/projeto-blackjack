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
 
    //O usuário deve encontrar uma mensagem 
    //de boas vindas no console ao abrir o programa
    
    console.log("Boas vindas ao jogo de BlackJack!")
    
    //O usuário deve ser questionado se deseja iniciar 
    //uma nova rodada
      
        
      if (confirm("Quer iniciar uma nova rodada?")){
         //sorteio das cartas
              
         const carta1U = comprarCarta()
         const carta2U = comprarCarta()
         const carta1C = comprarCarta()
         const carta2C = comprarCarta()

         // valor das cartas
         const resultadoDoUsuario = carta1U.valor + carta2U.valor
         const resultadoDoComputador = carta1C.valor + carta2C.valor
         
         //mostrar o sorteio no console
         console.log (`Usuário - cartas: ${carta1U.texto} ${carta2U.texto} - pontuação ${resultadoDoUsuario}`)
         console.log (`Computador - cartas: ${carta1C.texto} ${carta2C.texto} - pontuação ${resultadoDoComputador}`)
                
          //concluir o resultado e mostrar no console
         if(resultadoDoUsuario > resultadoDoComputador){
            console.log ("O usuário ganhou!" )
         } else if (resultadoDoComputador > resultadoDoUsuario){
            console.log ("O computador ganhou!")
         }else{
            console.log("Empate!")
         }
      }else{
         console.log ("O jogo acabou.")
      }
      