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
// Declaração de variável
let resultadoUsuario = 0
let somaTotalComputador = 0
let textoUsuario = ''
let somaUsuario = []
let naipeUsuario = []
let totalUsuario1 = []

let resultadoComputador = 0
let somaTotalUsuario = 0
let textoComputador = ''
let somaComputador = []
let naipeComputador = []
let totalComputador1 = []

let jogo = true

// Resultado cartas Usuário
function cartasUsuario() {
   const cartasUsuario = comprarCarta()
   resultadoUsuario = cartasUsuario.valor
   textoUsuario = cartasUsuario.texto
}

// Resultado cartas Computador
function cartasComputador() {
   const cartasComputador = comprarCarta()
   resultadoComputador = cartasComputador.valor
   textoComputador = cartasComputador.texto
}

// Distribuí as primeiras cartas
function inicioJogo() {
   for (let i = 0; i < 2; i++) {
      cartasUsuario()
      cartasComputador()
      somaUsuario.push(resultadoUsuario)
      naipeUsuario.push(textoUsuario)
      somaComputador.push(resultadoComputador)
      naipeComputador.push(textoComputador)
   }
}

// Executa a compra de cartas durante o jogo
function comprandoCartaDuranteJogo() {
   cartasUsuario()
   cartasComputador()
   somaUsuario.push(resultadoUsuario)
   naipeUsuario.push(textoUsuario)
   somaComputador.push(resultadoComputador)
   naipeComputador.push(textoComputador)
}

// Calcula os pontos dos jogadores
function resultado() {
   const somar = (acumulado, x) => acumulado + x
   const totalUsuario = somaUsuario.reduce(somar)
   const totalComputador = somaComputador.reduce(somar)

   totalUsuario1.push(totalUsuario)
   totalComputador1.push(totalComputador)

   somaTotalUsuario = totalUsuario1[totalUsuario1.length - 1]
   somaTotalComputador = totalComputador1[totalComputador1.length - 1]

}

// Verifica se os jogadores atingiu a pontuação 
function verificaGanhador() {
   if (somaTotalComputador > 21 && somaTotalComputador > somaTotalUsuario) {
      return 'Usuário Ganhou!'

   } else if (somaTotalUsuario > 21 && somaTotalUsuario > somaTotalComputador) {
      return 'Computador Ganhou!'

   } else if (somaTotalComputador === somaTotalUsuario) {
      return 'Empatou!'
   }
   else {
      if (somaTotalComputador > somaTotalUsuario) {
         return 'Computador Ganhou!'
      }else {
         return 'Usuário Ganhou!'
      }

   }
}

//  Lógica do jogo

const inicio = confirm('Bem-vindo ao jogo de Blackjack!\nQuer iniciar uma nova rodada?')
if (inicio === false) {
   const acabou = alert('O jogo acabou.')
} else {
   inicioJogo()
   resultado()

   while (somaTotalComputador <= 21 || somaTotalUsuario <= 21) {
      verificaGanhador()

      jogo = confirm(`Suas cartas são ${naipeUsuario}. A carta revelada do computador é ${naipeComputador[0]}.\nDeseja comprar mais cartas?`)

      if (jogo === true) {
         comprandoCartaDuranteJogo()
         verificaGanhador()
         resultado()
      } else {
         const acabou = alert(`Usuário - Cartas ${naipeUsuario} - Pontuação: ${somaTotalUsuario}\nComputador - Cartas: ${naipeComputador} - Pontuação: ${somaTotalComputador}\n${verificaGanhador()}`)
         break
      }
   }
   window.location.reload()
}
