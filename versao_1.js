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



  alert("Boas vindas ao jogo BlackJack!!")

  const jogo = confirm ("Quer iniciar uma nova rodada?")
if (jogo === false) {
   console.log("O jogo acabou?")
   
} else if (jogo === true)
   console.log(" Comecar um novo jogo ")
   const jogador1 = " Jogador 1"
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   
   console.log(`${jogador1} - cartas : ${carta1.texto} ${carta2.texto} - pontuação = ${carta1.valor + carta2.valor}`)
      
      const jogador2 = "CPU"
      const carta3 = comprarCarta()
      const carta4 = comprarCarta()
      
      console.log(`${jogador2} - cartas : ${carta3.texto} ${carta4.texto} - pontuação = ${carta3.valor + carta4.valor}`)

      if ( carta1.valor + carta2.valor === carta3.valor + carta4.valor){
         console.log(`Houve um empate`)
   
      }

      else if (carta1.valor + carta2.valor < carta3.valor + carta4.valor){

         console.log(`O ${jogador2} ganhou essa rodada `)

      }

      else if (carta1.valor + carta2.valor === 21){

         console.log(`O ${jogador1} venceu a partida`)
}

 
       else if (carta3.valor + carta4.valor === 21){
   
         console.log(`O ${jogador2} venceu a partida`)
}

       else  {
 
         console.log(`O ${jogador1} venceu a partida`) 
}

console.log(`FIM DE JOGO`)