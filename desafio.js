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

    alert("Bem-vinde ao jogo de blackjack! :D")

    let jogo = confirm("Quer iniciar uma nova rodada?")
    if (jogo) {
        let carta1Usuario = comprarCarta()
        let carta2Usuario = comprarCarta()
        let carta1Computador = comprarCarta()
        let carta2Computador = comprarCarta()
    
        if (carta1Usuario.texto === "A" && carta2Usuario.texto === "A") {
          carta1Usuario = comprarCarta()
          carta2Usuario = comprarCarta()
        }
        if (carta1Computador.texto === "A" && carta2Computador.texto === "A") {
          carta1Computador = comprarCarta();
          carta2Computador = comprarCarta();
        }

        let textosCartasUsuario = `${carta1Usuario.texto} ${carta2Usuario.texto}`
        let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor

        let querComprarCarta = confirm(`Suas cartas são: ${textosCartasUsuario}. A carta revelada do computador é: ${carta1Computador.texto}\n Deseja comprar mais uma carta?` )
        while (pontuacaoUsuario < 21 && querComprarCarta) {
          let novaCartaUsuario = comprarCarta()

          textosCartasUsuario = textosCartasUsuario + ` ${novaCartaUsuario.texto}`
          pontuacaoUsuario = pontuacaoUsuario + novaCartaUsuario.valor
          
          if (pontuacaoUsuario < 21) {
            querComprarCarta = confirm(`Suas cartas são: ${textosCartasUsuario}. A carta revelada do computador é: ${carta1Computador.texto}\n Deseja comprar mais uma carta?` )
          }
        }

        let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor;
        let textosCartasComputador = `${carta1Computador.texto} ${carta2Computador.texto}`
        if (pontuacaoUsuario <= 21) {
          // Vez do computador:
          while (pontuacaoComputador < pontuacaoUsuario) {
            let novaCartaComputador = comprarCarta()

            pontuacaoComputador = pontuacaoComputador + novaCartaComputador.valor;
            textosCartasComputador = textosCartasComputador + ` ${novaCartaComputador.texto}`
          }
        }



        // Resultado:
        let resultado 
         if (pontuacaoUsuario > 21){
            resultado = "O computador ganhou! :/"
        } 
        else if(pontuacaoComputador > 21){
            resultado = "Você ganhou! \\o/"
        } 
        else if (pontuacaoUsuario === pontuacaoComputador){
           resultado = "Empatou! :o"
        }
        else if (pontuacaoUsuario > pontuacaoComputador){
         resultado = "Você ganhou! \\o/"
        } else if(pontuacaoComputador > pontuacaoUsuario){
         resultado = "O computador ganhou! :/"
        }
        
         

        alert(`Suas cartas são ${textosCartasUsuario}. Sua pontuação: ${pontuacaoUsuario}. 
        \nAs cartas do computador são ${textosCartasComputador}. Pontuação do computador: ${pontuacaoComputador}.
        \n`+ resultado)



    }
    else {
        alert("O jogo acabou! :(")
    }