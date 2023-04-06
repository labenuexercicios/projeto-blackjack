/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

 */
console.log("Boas vindas ao jogo de BlackJack!")
console.log("-----------------")

const start = confirm("Quer iniciar uma rodada?")


let cartausuario = []
let cartaspc = []
cartausuario.push(comprarCarta())
cartaspc.push(comprarCarta())

console.log(cartausuario.texto, cartaspc.texto)

if (start) {

   function verificaCartas() {

      if (cartausuario[0].texto === "A" && cartausuario[0].texto === "A") {

         cartausuario = []
         cartausuario.push(comprarCarta())
         cartaspc.push(comprarCarta())
      }

      if (cartaspc[0].texto === "A" && cartaspc[0].texto === "A") {
         cartaspc = []
         cartaspc.push(comprarCarta())
         cartaspc.push(comprarCarta())

      }
     
   }

}

let fim1 = confirm(`Suas cartas: ${cartausuario[0].valor}, ${cartausuario[1].valor} carta revelada do computador ${cartaspc[0]} `)

console.log(fim1)

let usuarioSoma = cartausuario[0].valor + cartausuario[1].valor
let pcSoma = cartaspc[0].valor + cartaspc[1].valor
let start2 = confirm("quer comprar mais uma carta?")

while (usuarioSoma <= 21 && pcSoma <= 21) {
   confirm(start2)
   if (start2 === true) {
      cartausuario.push(comprarCarta())
      cartaspc.push(comprarCarta())
   } else {


   }
}

























// let jogadorSoma = (cartassorteadas.carta1.valor + cartassorteadas.carta2.valor)
// let pcSoma = (cartassorteadas.carta3.valor + cartassorteadas.carta4.valor