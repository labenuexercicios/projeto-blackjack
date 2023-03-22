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

alert("Boas vindas ao jogo de BlackJack!")
 if (confirm('Quer iniciar uma nova rodada?')) {
   const primeiraCartaUsuario = comprarCarta()   
   const segundaCartaUsuario = comprarCarta()
   const somaDasCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   // primeiraCartaUsuario.texto imprime o texto da carta. Nesse caso: "K♦️" enquanto primeiraCartaUsuario.valor imprime o valor
   
   const resUsuario = `Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - Pontuação: ${somaDasCartasUsuario}`

   console.log(resUsuario)


   const primeiraCartaPc = comprarCarta()
   const segundaCartaPc = comprarCarta()
   const somaDasCartasPc = primeiraCartaPc.valor + segundaCartaPc.valor

   const resPC = `Computador - cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - Pontuação: ${somaDasCartasPc}`

   console.log(resPC)


   if (somaDasCartasUsuario > somaDasCartasPc) {
      console.log('O usuário ganhou!')
   } else if (somaDasCartasUsuario < somaDasCartasPc) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }

 } else {
   alert('O jogo acabou!')
 }


 
// 4 - Abra um Pull Request e faça um commit com a frase “Nosso Jogo”.