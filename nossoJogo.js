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
console.log(`Boas vindas ao jogo de BlackJack!`)
if(confirm(`Quer iniciar uma nova rodada?`)){
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const somaUsuario1 = cartaUsuario1.valor + cartaUsuario2.valor
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const somaComputador1 = cartaComputador1.valor + cartaComputador2.valor
      
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} => pontuação total = ${somaUsuario1} pontos.`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} e ${cartaComputador2.texto} => pontuação total = ${somaComputador1} pontos.`)
      
   if(somaUsuario1 > 21){
   console.log("O usuário estourou a pontuação, computador ganhou!")
   }else if(somaComputador1 > 21){
   console.log("O computador estourou a pontuação, usuário ganhouu!")
   }else if(somaUsuario1 > somaComputador1){
   console.log("O usuário ganhou!")
   }else if(somaUsuario1 < somaComputador1) {
   console.log("O computador ganhou!")
   }else if(somaUsuario1 === somaComputador1){
   console.log("Empate!")
   }
   }else{
   console.log("O jogo acabou!")
   }
