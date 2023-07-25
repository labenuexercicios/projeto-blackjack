function blackjack() {
   const welcome = 'Boas vindas ao jogo de Blackjack 1.0'
   console.log(welcome)

   const start = confirm('Olá! Gostaria de iniciar uma rodada de BlackJack?')

   if (start) {
      const userFirstCard = comprarCarta()
      const userSecondCard = comprarCarta()

      const userPoints = userFirstCard.valor + userSecondCard.valor

      const userCardsText = `Suas cartas são:
      ${userFirstCard.texto} - ${userFirstCard.valor} pontos
      ${userSecondCard.texto} - ${userSecondCard.valor} pontos
      
      Pontuação: ${userPoints}`

      const pcFirstCard = comprarCarta()
      const pcSecondCard = comprarCarta()

      const pcPoints = pcFirstCard.valor + pcSecondCard.valor

      const pcCardsText = `As cartas do computador são:
      ${pcFirstCard.texto} - ${pcFirstCard.valor} pontos
      ${pcSecondCard.texto} - ${pcSecondCard.valor} pontos
      
      Pontuação: ${pcPoints}`

      console.log(userCardsText)
      console.log(pcCardsText)

      let decisionText

      if(userPoints > pcPoints) {
         decisionText = 'Parabéns, você venceu'
      }

      if(userPoints < pcPoints) {
         decisionText = 'Sinto muito, você perdeu'
      }

      if(userPoints === pcPoints) {
         decisionText = 'Ops, deu empate'
      }

      console.log(decisionText)
      
   }

   if(!start){
      const cancelText = 'O jogo acabou.'
      console.log(cancelText)
   }
}

blackjack()