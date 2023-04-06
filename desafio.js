/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)



let cartasUsuario = [(comprarCarta()),(comprarCarta())]
let cartasComputador = [(comprarCarta()),(comprarCarta())]  
let confereCartas = true  

while (confereCartas === true){
   if(cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasComputador[0].valor ===11 && cartasComputador[1].valor ===11){
      console.log("entrei no while")
      cartasUsuario = []
      cartasComputador = []
      cartasUsuario = [(comprarCarta()),(comprarCarta())]
      cartasComputador = [(comprarCarta()),(comprarCarta())] 
   }else {
      console.log("nao entrei no while")
      confereCartas = false
   }
}

console.log(cartasUsuario,cartasComputador)
 * 
 * 
 * 
 */

let BlackJack = confirm("Estar pronto para jogar Black Jack")

if (BlackJack) {

   let cartasUsuario = [(comprarCarta()), (comprarCarta())]
   console.log(cartasUsuario[0], cartasUsuario[1])
   let cartasComputador = [(comprarCarta()), (comprarCarta())]
   let confereCartas = true

   while (confereCartas === true) {
      if (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
         console.log("entrei no while")
         // cartasUsuario = []
         // cartasComputador = []
         cartasUsuario = [(comprarCarta()), (comprarCarta())]
         cartasComputador = [(comprarCarta()), (comprarCarta())]
      } else {
         console.log("nao entrei no while")
         confereCartas = false
      }
   }


   let pontosJogador = 0
   let pontosPC = 0
   let maoUsuario
   let maoComputador

   const calcularPontos = () => {
      pontosJogador = 0
      pontosPC = 0
      for (let i = 0; i < cartasUsuario.length; i++) {
         pontosJogador += cartasUsuario[i].valor
      }
      for (let i = 0; i < cartasComputador.length; i++) {
         pontosPC += cartasComputador[i].valor
      }
   }
   const lerMaoUsuario = () => {
      maoUsuario = ""
      for (const iterator of cartasUsuario) {
         maoUsuario += iterator.texto + ""
      }
   }
   const lerMaoPC = () => {
      maoComputador = ""
      for (const iterator of cartasComputador) {
         maoComputador += iterator.texto + ""
      }
   }

   const maisCartas = () => {
      if (confirm(`Suas cartas são: ${maoUsuario}\n Deseja mais uma carta?`)) {
         cartasUsuario.push(comprarCarta())
         lerMaoUsuario()
         calcularPontos()
      } else {
         while (pontosPC < pontosJogador) {
            cartasComputador.push(comprarCarta())
            lerMaoPC()
            calcularPontos()
         }
      }
   }
   maisCartas()

   calcularPontos()


   console.log(`Cartas do Jogador: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} pontos ${pontosJogador}`)
   console.log(`Cartas do PC: ${cartasComputador[0].texto} ${cartasComputador[1].texto} pontos ${pontosPC}`)

   if (pontosJogador > pontosPC) {
      console.log("O jogador ganhou!")
      alert(`Você ganhou! \n Cartas do Jogador: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} pontos ${pontosJogador} \n Cartas do PC: ${cartasComputador[0].texto} ${cartasComputador[1].texto} pontos ${pontosPC}`)
   } else if (pontosPC > pontosJogador) {
      console.log("O jogador perdeu!")
      alert(`Você perdeu! \nCartas do Jogador: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} pontos ${pontosJogador} \n Cartas do PC: ${cartasComputador[0].texto} ${cartasComputador[1].texto} pontos ${pontosPC}`)
   } else if (pontosJogador === pontosPC) {
      console.log("Empate!")
      alert(`Empate! \nCartas do Jogador: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} pontos ${pontosJogador} \n Cartas do PC: ${cartasComputador[0].texto} ${cartasComputador[1].texto} pontos ${pontosPC}`)
   }
}

else { alert("O jogo acabou") }

