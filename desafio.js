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


let cartasUsuario = [(comprarCarta()), (comprarCarta())]
let cartasComputador = [(comprarCarta()), (comprarCarta())]

let primeiraMao = () => {
   let cartasUsuario = [(comprarCarta()), (comprarCarta())]
   let cartasComputador = [(comprarCarta()), (comprarCarta())]
   let confereCartas = true


   while (confereCartas === true) {
      if (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
         console.log("entrei no while")
         cartasUsuario = []
         cartasComputador = []
         cartasUsuario = [(comprarCarta()), (comprarCarta())]
         cartasComputador = [(comprarCarta()), (comprarCarta())]
      } else {
         console.log("nao entrei no while")
         confereCartas = false
      }
   }
}


let check = true

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
      check = false
   }
}


const resultados = () => {
   let mensagem = ""
   if (pontosJogador === pontosPC) {
      mensagem = "Empate!"
   } else if (pontosPC > 21 || (pontosJogador > pontosPC && pontosJogador <= 21)) {
      mensagem = "Você ganhou!"
   } else if (pontosJogador > 21 || (pontosPC > pontosJogador && pontosPC <= 21)) {
      mensagem = "O computador ganhou!"
   }

   alert(`Suas cartas são ${maoUsuario}. Sua pontuação é ${pontosJogador}.\nAs cartas do computador são ${maoComputador}. A pontuação do computador é ${pontosPC}.\n${mensagem}`)
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
calcularPontos()


const BlackJack = () => {
   if (confirm("Estar pronto para jogar Black Jack")) {
      primeiraMao()
      calcularPontos()
      lerMaoUsuario()
      lerMaoPC()
      while (pontosJogador < 21 && check === true) {
         maisCartas()
      }
      resultados()
   } else {
      alert("O jogo acabou!")
   }
}
BlackJack()

