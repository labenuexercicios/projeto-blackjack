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

function jogarBalckJack() {

   let usuario = []
   let computador = []

   const inicioJogo = confirm("Bem-vinde ao jogo Black Jack!\nQuer iniciar uma nova jogada?")

   if (inicioJogo) {
      let cartasDoJogo = false
      while (!cartasDoJogo) {
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())

         //VERIFICAÇÃO DOS A'S
         if ((usuario[0].valor === 11 && usuario[1].valor === 11 || computador[0].valor === 11 && computador[1].valor === 11)) {

            usuario = []
            computador = []

         } else {
            cartasDoJogo = true
         }

      }
      let pontosUsuario = 0
      let textoUsuario = ``
      let pontosComputador = 0
      let textoComputador = ``

      // PARA SABER AS CARTAS DOS JOGADORES

      for (let i = 0; i < usuario.length; i++) {
         textoUsuario = textoUsuario + usuario[i].texto
         pontosUsuario = pontosUsuario + usuario[i].valor

      }

      for (let j = 0; j < computador.length; j++) {
         textoComputador = textoComputador + computador[j].texto
         pontosComputador = pontosComputador + computador[j].valor

      }

      let cartasDoJogo2 = true

      while (cartasDoJogo2) {
         if (pontosUsuario > 21) {
            break
         }
         let mensagem = confirm(`Suas cartas são ${textoUsuario}. A carta revelada do computador é ${computador[0].texto}. \nDeseja comprar mais uma carta?`)

         // COMPRAR MAIS CARTAS ATE ATE ATINGIR 21

         if (mensagem) {
            let cartasDoJogo2 = comprarCarta()
            usuario.push(cartasDoJogo2)
            pontosUsuario += cartasDoJogo2.valor
            textoUsuario += `${cartasDoJogo2.texto}`

         } else {
            cartasDoJogo2 = false
         }
      }
      while (pontosComputador <= pontosUsuario && pontosUsuario <= 21) {
         let cartasDoJogo3 = comprarCarta()
         computador.push(cartasDoJogo3)
         pontosComputador = pontosComputador + cartasDoJogo3.valor
         textoComputador = textoComputador + `${cartasDoJogo3.texto}`

      }
      // PARAR DE COMPRAR CARTA
      let finalJogo = ``
      if (pontosUsuario > 21) {
         finalJogo = `O computador ganhou!`
      } else if (pontosComputador > 21) {
         finalJogo = `O usuário ganhou!`
      } else if (pontosUsuario > pontosComputador) {
         finalJogo = `O usuário ganhou!`
      } else if (pontosComputador > pontosUsuario){
         finalJogo = `O computador ganhou!`
      }else{
         finalJogo = `EMPATE!`
      }

      alert(`Usuario - Cartas: ${textoUsuario} - Pontuação: ${pontosUsuario}\nComputador - Cartas: ${textoComputador} - Pontuação: ${pontosComputador}\n${finalJogo}`)

   } else {
      alert(`Fim de Jogo`)
   }

}
jogarBalckJack()

