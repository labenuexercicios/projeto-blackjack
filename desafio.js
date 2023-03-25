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

const desafioBlackJack = () => {
   let jogador = []
   let pc = []

   let newRound = confirm(`Bem vindo ao BlackJack! Deseja iniciar uma nova rodada ?`)

   if(newRound) {
      let darCartas = false
      while(!darCartas) {
         jogador.push(comprarCarta())
         jogador.push(comprarCarta())
         pc.push(comprarCarta())
         pc.push(comprarCarta())

         if  (
           (jogador[0].valor === 11 && jogador[1].valor === 11 )  ||
           (pc[0].valor === 11 && pc[1].valor) 
         )  {
            jogador = []
            pc = []
         } else {
            darCartas = true
         }
      }
   }
         pc[0].texto = 'Carta revelada do PC é '
         pc[0].valor = 0


         let msgjogador = `Jogador :${jogador[0].texto} ${jogador[1].texto}`
         let msgPc = `Pc :${pc[0].texto} ${pc[1].texto} `

         let pontosJogador = 0
         let pontosPc = 0

         for(let i = 0 ; i < jogador.length ; i++) {
            msgjogador += jogador[i].texto + ``
            pontosJogador += jogador[i].valor 
         }

         for ( let i = 0 ; i < pc.length ; i++ ) {
            msgPc += pc[i].texto + ``
            pontosPc += pc[i].valor 
         }

         let comprarCarta = true

         while (comprarCarta) {
            if (pontosPc > 21) {
               break
            }
            let novaCarta = 
               confirm(`${msgjogador} A carta revelada do computador é ${msgjogador[0].texto} ${msgPc[1].texto} 
               Deseja comprar mais uma carta ?`)
            // console.log(novaCarta)  
            if(novaCarta) {
               let cartas = comprarCarta()
               jogador.push(cartas)
               pontosJogador += cartas.valor
               msgjogador += `${cartas.texto}`
            } else {
               novaCarta = false 
            }
            while(pontosPc <= pontosJogador && pontosJogador <= 21) {
               let newCartas = comprarCarta()
               pc.push(newCartas)
              pontosPc += pc.valor
              msgPc += `${pc.texto}`   
            }
            let resultado = ``

            if (pontosJogador > 21) {
               resultado = ' PC GANHOU'
            } else if ( pontosPc > 21 ) {
               resultado = 'JOGADOR GANHOU '
            } else if ( pontosPc > pontosJogador) {
               resultado = 'PC GANHOU'
            } else if (pontosJogador > pontosPc) {
               resultado = 'JOGADOR GANHOU'
            } else {
               resultado = 'EMPATE'
            }
            alert (
               `${msgjogador}
               Pontuação Jogador '6g`
            )
         }
      }
   }
}

console.log(desafioBlackJack())