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



function blackJackDesafio() {
   //INICIANDO O JOGO
   let confirmNovaRodada = confirm(`Bem-vinde ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)

   if (confirmNovaRodada) {
      //DISTRIBUINDO CARTAS
      let jogadores = {
         user: [comprarCarta(), comprarCarta()],
         computador: [comprarCarta(), comprarCarta()]
      }

      // LÓGICA DO DUPLO ÁS (AVALIAR LÓGICA)
      while (
         (jogadores.user[0].valor === 11 && jogadores.user[1].valor === 11) || (jogadores.computador[0].valor === 11 && jogadores.computador[1].valor === 11)
      ) {
         jogadores = {
            user: [],
            computador: []
         }
      }
      //ABREVIANDO O OBJETO      
      let user = jogadores.user
      let computador = jogadores.computador

      //CRIANDO UM TEXTO PARA CONCATENAR COM OS ELEMENTOS EXTORNADOS PELO LAÇO(ESPERO QUE ENTENDA)
      let cartaTextoUser = `Jogador: `
      let cartaTextoComputador = `Computador: `

      //DECLARANDO AS VARIÁVEIS DE PONTUAÇÃO
      let pontosUser = 0
      let pontosComputador = 0

      //CRIANDO LAÇO PARA OBTER O VALOR DAS CARTAS
      for (let i = 0; i < user.length; i++) {
         pontosUser += user[i].valor
      }
      for (let i = 0; i < computador.length; i++) {
         pontosComputador += computador[i].valor
      }

      //CRIANDO LAÇO PARA OBTER O "TEXTO" DAS CARTAS
      for (let cartaTexto of jogadores.user) {
         let nipe = cartaTexto.texto + " "
         cartaTextoUser += nipe
      }
      for (let cartaTexto of jogadores.computador) {
         let nipe = cartaTexto.texto + " "
         cartaTextoComputador += nipe
      }

      //USUARIO COMPRANDO CARTAS
      let comprando = true
      while (comprando) {
         if (pontosUser >= 21) {
            break
         }
         let confirmCompra = confirm(`Suas cartas são ${cartaTextoUser}. \nA carta revelada do computador é ${jogadores.computador[0].texto}.\nDeseja comprar mais uma carta?`)

         if (confirmCompra) {
            let carta = comprarCarta()
            jogadores.user.push(carta)
            pontosUser += carta.valor
            cartaTextoUser += `${carta.texto}`


         } else {
            comprando = false
         }
      }
      //COMPUTADOR SÓ COMPRA CARTAS ENQUANTO AS CARTAS DO USUARIO FOREM < 21
      while (pontosComputador <= pontosUser && pontosUser <= 21) {
         let carta = comprarCarta()
         jogadores.computador.push(carta)
         pontosComputador += carta.valor
         cartaTextoComputador += `${carta.texto}`
      }

      // LÓGICA DO RESULTADO
      let resultado = ``
      if (pontosUser > 21) {
         resultado = `O computador ganhou!`
      } else if (pontosComputador > 21) {
         resultado = `O jogador ganhou!`
      } else if (pontosUser < pontosComputador) {
         resultado = `O computador ganhou`
      } else if (pontosUser > pontosComputador) {
         resultado = `O jogador ganhou!`
      } else {
         resultado = `Empate!`
      }
      //ALERT DO RESULTADO FINAL
      alert(`${cartaTextoUser} -Pontuação: ${pontosUser}\n${cartaTextoComputador} -Pontuação: ${pontosComputador}\n${resultado}`)

      //CASO O JOGADOR NÃO QUEIRA JOGAR
   } else {
      alert(`O jogo acabou.`)
   }
}

blackJackDesafio()
