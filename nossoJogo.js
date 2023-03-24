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

    console.log("Boas vindas ao jogo de BlackJack !")

    let jogo = confirm("Quer iniciar uma nova rodada?")

    if(jogo){
      let primeiraCartaUsuario = comprarCarta()
      let segundaCartaUsuario = comprarCarta()
      let primeiraCartaComputador= comprarCarta()
      let segundaCartaComputador = comprarCarta()

      let pontuaçaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
      let pontuaçaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor


      console.log(`Usuário - cartas :${primeiraCartaUsuario.texto} + ${segundaCartaUsuario.texto} - ${pontuaçaoUsuario}`)
      console.log(`Computador - cartas :${primeiraCartaComputador.texto} + ${segundaCartaComputador.texto} - ${pontuaçaoComputador}`)
      
      if(pontuaçaoUsuario > pontuaçaoComputador){
         console.log("O usuário ganhou !")
      }
      else if (pontuaçaoComputador>pontuaçaoUsuario){
         console.log("O computador ganhou !")
      } else if(pontuaçaoComputador===pontuaçaoUsuario){
         console.log("Empate !")
      }

     else{
      console.log("O jogo acabou")
    }

   }

    
    
    
    
