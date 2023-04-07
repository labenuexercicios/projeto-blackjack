// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// let carta = comprarCarta()

console.log("Boas vindas ao jogo de BlackJack!")


if (confirm("Quer iniciar uma nova rodada?")) {


   let userCarta1 = comprarCarta()
   let userCarta2 = comprarCarta()

   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

   let somaUser = userCarta1.valor + userCarta2.valor
   let somaPc = pcCarta1.valor + pcCarta2.valor

   if (somaUser === 22 || somaPc === 22) {

      userCarta1 = comprarCarta()
      userCarta2 = comprarCarta()

      pcCarta1 = comprarCarta()
      pcCarta2 = comprarCarta()

      somaUser = userCarta1.valor + userCarta2.valor
      somaPc = pcCarta1.valor + pcCarta2.valor
   }

   console.log(`Usuário - Cartas ${userCarta1.texto} ${userCarta2.texto} - Pontuação ${somaUser}`)
   console.log(`computador - Cartas ${pcCarta1.texto} ${pcCarta2.texto} - Pontuação ${somaPc}`)

   if (somaUser > somaPc) {
      console.log("O usuário venceu!")

   } else if (somaUser < somaPc) {
      console.log("O computador venceu!")

   } else {
      console.log("Empate")
   }


} else {
   console.log("O jogo acabou")
}