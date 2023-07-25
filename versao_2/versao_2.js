function blackjack() {
   const welcome = 'Boas vindas ao jogo de Blackjack 2.0'
   alert(welcome)

   const start = confirm('Gostaria de iniciar uma nova partida?')

   if (start) {
      let userCards = []
      let pcCards = []

      // verificação de compra de dois Ás
      let checkAces = false

      while (!checkAces) {
         const userFirstCard = comprarCarta()
         userCards.push(userFirstCard)

         const userSecondCard = comprarCarta()
         userCards.push(userSecondCard)

         const pcFirstCard = comprarCarta()
         pcCards.push(pcFirstCard)

         const pcSecondCard = comprarCarta()
         pcCards.push(pcSecondCard)

         if (userCards[0].valor === 11 && userCards[1].valor === 11 || pcCards[0].valor === 11 && pcCards[1].valor === 11) {
            userCards = []
            pcCards = []
         } else {
            checkAces = true
         }
      }

      // verifica se User quer comprar mais cartas
      let buyingCards = true

      while (buyingCards) {
         let userCardsTexts = ''
         let userPoints = 0

         for (let userCard of userCards) {
            userPoints += userCard.valor
            userCardsTexts += ` ${userCard.texto}`
         }

         if (userPoints > 21) {
            buyingCards = false
         } else {
            let roundText = `Suas cartas são ${userCardsTexts}\nA carta revelada do computador é ${pcCards[0].texto}\nDeseja comprar mais uma carta?`

            let moreCards = confirm(roundText)

            if (moreCards) {
               const newCard = comprarCarta()
               userCards.push(newCard)
            } else {
               buyingCards = false
            }
         }
      }


      // Cálculo de pontuação
      let pcCardsTexts = ''
      let pcPoints = 0

      let userPoints = 0
      let userCardsTexts = ''

      for (let pcCard of pcCards) {
         pcCardsTexts += `${pcCard.texto}`
         pcPoints += pcCard.valor
      }

      for (let userCard of userCards) {
         userPoints += userCard.valor
         userCardsTexts += ` ${userCard.texto}`
      }

      // PC compra cartas
      if (pcPoints < 22) {
         while (pcPoints < 22 && pcPoints < userPoints) {
            const newCard = comprarCarta()
            pcCards.push(newCard)

            pcCardsTexts = ''
            pcPoints = 0

            for (let pcCard of pcCards) {
               pcCardsTexts += ` ${pcCard.texto}`
               pcPoints += pcCard.valor
            }
         }
      }

      // Resultado e declaração de vitória
      let winner = ''

      if (userPoints > pcPoints && userPoints < 22) {
         winner = 'Você venceu!'
      }

      if (userPoints < pcPoints && pcPoints < 22) {
         winner = 'O computador venceu!'
      }

      if (userPoints < 22 && pcPoints > 21) {
         winner = 'Você venceu!'
      }

      if (pcPoints < 22 && userPoints > 21) {
         winner = 'O computador venceu'
      }

      if (userPoints === pcPoints || userPoints > 21 && pcPoints > 21) {
         winner = 'A partida empatou!'
      }

      const decisionText = `Suas cartas: ${userCardsTexts} - Pontuação: ${userPoints}\nCartas do computador: ${pcCardsTexts} - Pontuação: ${pcPoints}\n${winner}`

      alert(decisionText)
   }

   if (!start) {
      const cancelText = 'O jogo acabou.'
      alert(cancelText)
   }
}

blackjack()