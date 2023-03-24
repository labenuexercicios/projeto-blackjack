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

//* As cartas dos jogadores (usuário e computador) podem ser armazenadas em array.
function desafioBlackjack() {
   let usuario = []
   let computador = []
   let inicio = confirm(`Boas vindas ao jogo de BlackJack! Quer iniciar uma nova jogada?`)
   if(inicio === false){
      return alert(`Você não iniciou o jogo`)
   }
   const cartaUsuario1 = usuario.push(comprarCarta())
   const cartaUsuario2 = usuario.push(comprarCarta())
   const cartaComputador1 = computador.push(comprarCarta())
   const cartaComputador2 = computador.push(comprarCarta())

   const pontosDoUsuario = usuario
   const pontosDoComputador = computador
   
   let result = confirm(`Suas cartas são ${usuario[cartaUsuario1 - 1].texto} + ${usuario[cartaUsuario2 - 1].texto}. A carta revelada do computador é ${computador[cartaComputador1 - 1].texto}. 
      \n 
      Deseja comprar mais uma carta?`)
   let contador = 0

   while (result) {
      usuario.push(comprarCarta())

      let contadorUsuario = 0
      for (let carta of usuario) {
         contadorUsuario = contadorUsuario + carta.valor
      }
      alert("Contador usuário: " + contadorUsuario)
   
      let contadorComputador = 0
      for (let carta of computador) {
         contadorComputador = contadorComputador + carta.valor
      }
      alert("Contador Computador: " + contadorComputador)

      for(i = 0; i < usuario.length; i++){
         contador = contador + usuario[i].valor
      }
      if(contador > 21){
         result = false
         return alert(`O computador ganhou!`)
      }else {
         result = confirm(`Deseja comprar mais uma carta?`)
          alert(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. Sua pontuação é ${pontosDoUsuario}  
      "\n"  
      As cartas do computador são ${computador[0].texto} ${computador[1].texto}.A pontuação do computador é ${pontosDoComputador}.` )
      }
   }
   
   let contadorUsuario = 0
   for (let carta of usuario) {
      contadorUsuario = contadorUsuario + carta.valor
   }
   alert("Contador usuário: " + contadorUsuario)

   let contadorComputador = 0
   for (let carta of computador) {
      contadorComputador = contadorComputador + carta.valor
   }
   alert("Contador Computador: " + contadorComputador)

   if (contadorUsuario > contadorComputador) {
      return alert(`Você ganhou!`)
   } else if (contadorUsuario === contadorComputador){
      return alert(`Você empatou com o computador!`)
   } else {
      return alert(`O computador ganhou!`)
   }

   

   


   //Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.
   /*if (comprarCarta === 2 * "A") {
      return `Fim do Jogo`
   }*/

   //Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam 
   //sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. 
   //Você deve perguntar ao usuário se ele deseja comprar mais uma carta. Veja abaixo:


   /*if(ok){
       return usuario = usuario + comprarCarta()

    } else {
       return `Fim de Jogo`
    }*/




  

}
desafioBlackjack()













