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
   //  ## Lista de requisitos


   //  - [X] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programa
       
   //  - [X] O usuário deve ser questionado se deseja iniciar uma nova rodada	
    
   //  - [X] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo	
    
   //  - [X] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador
    
   //  - [ ] Ao final do jogo, o programa deve imprimir o resultado informando quem ganhou	
    
   //  - [ ] Implementou a verificação para impedir um par de A na primeira mão	
    
   //  - [ ] O jogo esconde a uma das cartas do computador ao início da rodada	
    
   //  - [ ] O usuário é questionado se deseja comprar mais cartas	
    
   //  - [ ] Se o usuário somar mais de 21, o mesmo perde automaticamente	
    
   //  - [ ] Se o computador somar mais de 21, o mesmo perde automaticamente	



// console.log('Olá! Seja bem vind@ ao nosso Black Jack! Sinta-se a vontade para jogar o quanto quiser.')

// const iniciarNovoJogo = confirm('Você gostaria de começar uma nova rodada?')

// if(iniciarNovoJogo === true){
  
//   const carta1Usuario = comprarCarta()
//   const carta2Usuario = comprarCarta()
//   const carta1Computador = comprarCarta()
//   const carta2Computador = comprarCarta()
  
//   let scoreUsuario = carta1Usuario.valor + carta2Usuario.valor
//   let scorePC = carta1Computador.valor + carta2Computador.valor
  
//   console.log(`Usuario: ${carta1Usuario.texto} e ${carta2Usuario.texto} | pontuação: ${scoreUsuario}`)
//   console.log(`Computador: ${carta1Computador.texto} e ${carta2Computador.texto} | pontuação: ${scorePC}`)

//   if(scoreUsuario > scorePC){
//     console.log('Parabens, vc venceu!')
//   } else if(scorePC > scoreUsuario){
//     console.log('Que pena, o computador venceu!')
//   } else{
//     console.log('Empate!')
//   }

// } else{
//   console.log('Jogo encerrado. Volte a qualquer hora para jogar mais!')
// }





