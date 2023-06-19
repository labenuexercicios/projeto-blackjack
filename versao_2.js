let jogador = []
    let computador = []
    
    if(confirm("Bem-vindo ao Blackjack!" + "\n" + "Quer jogar ?")){
       let cartasOk = false
       while (!cartasOk){

          jogador.push(comprarCarta())
          jogador.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())

          // Se o valor for de A for 11 então sorteie de novo 
          if ((jogador[0].valor === 11 && jogador[1].valor === 11) ||
             (computador[0].valor === 11 && computador[1].valor === 11)) { 

                jogador = []
                computador = []
          } else {
             cartasOk = true
          }
       }
       
       // Comprar mais cartas "Jogador"
       
       let comprando = true
    
       while(comprando){
          let textos = ""
          let pontos = 0
          for (let carta of jogador){
             textos += carta.texto + " "
             pontos += carta.valor
          }
    
          if (pontos > 21){
             comprando = false
          } else {
             let confirmCompra = confirm(
                `Suas cartas são ${textos}. A carta do computador é ${computador[0].texto}.` +
                "\n"+ 
                "Quer comprar mais uma cart ?"
             )
          
             if (confirmCompra){
                jogador.push(comprarCarta())
             } else {
                comprando = false
             }
          }
       }



       
       // Cálculo dos pontos 
       let pontosComputador = 0
       let pontosJogador = 0
       let textosComputador = ""
       let textosJogador = ""
    
       // Computador
       for (let carta of computador){
          pontosComputador += carta.valor
          textosComputador += carta.texto + " "
       }

       // Jogador
       for (let carta of jogador){
          pontosJogador += carta.valor
          textosJogador += carta.texto + " "
       }
    





       // Comprar mais cartas "Computador"
       if (pontosJogador <= 21){
          while (pontosComputador < pontosJogador && pontosComputador <= 21){
             computador.push(comprarCarta())
             pontosComputador = 0
             textosComputador = ""
             for (let carta of computador){
                pontosComputador += carta.valor
                textosComputador += carta.texto + " "
             }
          }
       }
      


       // Resultado da jogada: 

       let resultado = ""
       if (pontosJogador > pontosComputador && pontosJogador <= 21){
          resultado = "O usuário ganhou!"
       } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
          resultado = "O computador ganhou!"
       } else if (pontosComputador > 21 && pontosJogador <= 21){
          resultado = "O usuário ganhou!"
       } else if (pontosJogador > 21 && pontosComputador <= 21){
          resultado = "O computador ganhou!"
       } else {
          resultado = "Empate!"
       }
    
       // Imprimir cartas dos dois lados

       alert(
          `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
          "\n" + 
          `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
          "\n" + 
          resultado
       )
       
    } else {
       alert("O jogo acabou.")
    }