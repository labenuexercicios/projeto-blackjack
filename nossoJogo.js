
    let BlackJack =confirm("Quando estiver pronto para jogar Black Jack")

    if (BlackJack){
          let carta1jogador = purchaseCard()
          let carta2jogador = purchaseCard()
          let carta1pc = purchaseCard()
          let carta2pc = purchaseCard()
    
          let userPoint = carta1jogador.valor + carta2jogador.valor
          let computerPoint = carta1pc.valor + carta2pc.valor
    
          console.log(`Cartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${userPoint}`)
          console.log(`Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${computerPoint}`)
    
          if (userPoint > computerPoint){
             console.log("O jogador venceu!")
             alert(`Você venceu! \n Cartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${userPoint} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${computerPoint}`)
          }else if(computerPoint > userPoint){
             console.log("O jogador perdeu!")
             alert(`Você perdeu! \nCartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${userPoint} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${computerPoint}`)
          }else if( userPoint === computerPoint){
             console.log("Empate!")
             alert(`Empate! \nCartas do Jogador: ${carta1jogador.texto} ${carta2jogador.texto} pontos ${userPoint} \n Cartas do PC: ${carta1pc.texto} ${carta2pc.texto} pontos ${computerPoint}`)
          }
       }
    
    else(alert("Fim do jogo!"))