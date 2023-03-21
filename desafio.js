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





    


    

    function jogoBlack21 () {

      let black21 = confirm(`"Boas vindas ao jogo de BlackJack!"
        Quer iniciar uma nova rodada?`)
    
      let jogador = []
      let computador = []
    
      if(black21){
        let letsGo = false
    
        while(!letsGo){
          jogador.push(comprarCarta())
          jogador.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
    
          if((jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11) ) {
            jogador = []
            computador = []
          } else {
            letsGo = true
          }
            
          }
        
    
        let textoJogador = `Jogador: `
        let textoComputador = `Computador:`
    
        let pontosJogador = 0
        let pontosComputador = 0
    
        for (let i = 0; i < jogador.length; i++) {
          textoJogador += jogador[i].texto + " "
          pontosJogador += jogador[i].valor
        }
    
        for (let i = 0; i < computador.length; i++) {
         
          textoComputador += computador[i].texto + " "
          pontosComputador += computador[i].valor

          
        }
    
        let comprando = true
    
        while(comprando){
          if (pontosJogador > 21) {
            break;
          }
          let confirmCompra = confirm(
            `${textoJogador} \n A carta revelada do computador é ${computador[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
          )
    
          if (confirmCompra){
            let carta = comprarCarta();
            jogador.push(carta)
            pontosJogador += carta.valor;
            textoJogador += ` ${carta.texto}`
          } else {
            comprando = false
          }
        }
    
        while (pontosComputador <= pontosJogador && pontosJogador <= 21) {
          let carta = comprarCarta();
          computador.push(carta)
          pontosComputador += carta.valor;
          textoComputador += ` ${carta.texto}`
        }
    
        let gameOver = ""
    
        if (pontosJogador > 21) {
          gameOver = "Computador ganhou!"
        } else if (pontosComputador > 21) {
          gameOver = "Jogador ganhou!"
        } else if (pontosComputador > pontosJogador) {
          gameOver = "Computador ganhou!"
        } else if (pontosJogador > pontosComputador) {
          gameOver = "Jogador ganhou!"
        } else {
          gameOver = "Empate!"
        }
        
        alert(`${textoJogador}\nPontuação do jogador: ${pontosJogador}\n${textoComputador}\nPontuação do computador: ${pontosComputador}\n${gameOver}`)



      } else {
        alert('O jogo acabou !')
      }

      }
      jogoBlack21()
      
      
