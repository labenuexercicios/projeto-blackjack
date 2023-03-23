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

console.log (`Boas vindas ao jogo de BlackJack!`)

let novoJogo = confirm ("Quer iniciar uma nova rodada?")

function jogoDeCartas () {

   if (novoJogo) {
      // lógica da compra de cartas
      let cartaUser1 = comprarCarta()
      let cartaUser2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      // cálculo de pontos
      let pontosUser = cartaUser1.valor + cartaUser2.valor
      let pontosComputador = cartaComputador1.valor + cartaComputador2.valor

      // impressão de cartas e valor - string
      console.log(`Usuário - Cartas: ${cartaUser1.texto} ${cartaUser2.texto} - Pontuação: ${pontosUser}`)
      console.log(`Computador - Cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação: ${pontosComputador}`)
   
   // lógica para atribuir resultado
   if (pontosUser > pontosComputador && pontosUser <= 21) {
      console.log(`Você venceu!`)
   }
   else if (pontosComputador > pontosUser && pontosComputador <= 21) {
      console.log(`A máquina venceu.`)
   }
   else if (pontosComputador === pontosUser) {
      console.log(`Empate.`)
   }

   // lógica para estouro
   if (pontosUser > 21 && pontosUser > pontosComputador) {
      console.log(`Sua pontuação estourou! Vitória da máquina.`)
   }
   else if (pontosComputador > 21 && pontosComputador > pontosUser) {
      console.log(`A pontuação da máquina estourou! Você venceu!`)
   }
   else if (pontosComputador > 21 && pontosUser > 21) {
      console.log(`Estouro duplo!`)
   }
   }
   else {
      console.log(`O jogo acabou, caso queira iniciar um novo jogo, recarregue a página!`)
   }
}

jogoDeCartas()