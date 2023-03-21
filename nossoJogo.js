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

    const cartas = comprarCarta()


   console.log("Boas vindas ao jogo de BlackJack!")


   let black21 = confirm("Quer iniciar uma nova rodada?")


 if(black21) {
   let cartasUser1 = comprarCarta()
   let cartasUser2 = comprarCarta()
   let cartasPc1 = comprarCarta()
   let cartasPc2 = comprarCarta()

   let pontosUser = cartasUser1.valor + cartasUser2.valor
   let pontosPc = cartasPc1.valor + cartasPc2.valor

   console.log(`Usuario - Cartas: ${cartasUser1.texto} ${cartasUser2.texto} - Pontuação: ${pontosUser}`)
   console.log(`Maquina - Cartas: ${cartasPc1.texto} ${cartasPc2.texto} - Pontuação: ${pontosPc}`)

         if(pontosUser > pontosPc) {
            console.log('Você Ganhou PARABÉNS :)')
         } else if(pontosPc > pontosUser) {
            console.log('A máquina ganhou não foi dessa vez :/')
         } else if(pontosUser === pontosPc) {
            console.log('EMPATE :O ! Recarregue a página e Desafie a Máquina novamente')
         } else if (pontosUser && pontosPc > 21) {
            console.log('')
         }

      }  else {
         console.log('o jogo acabou, caso queira jogar novamente recarregue a página!')
      }