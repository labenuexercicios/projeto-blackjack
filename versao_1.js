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

    
    console.log("Boas vindas ao jogo de Blackjack!")

    let iniciarRodada = confirm("Quer iniciar uma nova rodada?")
    
    if (iniciarRodada) {
       let usuario = comprarCarta().valor + comprarCarta().valor
       let computador = comprarCarta().valor + comprarCarta().valor
    
       console.log(`Usuário - Cartas: ${comprarCarta().texto}, ${comprarCarta().texto} - pontuação: ${usuario}`)
       console.log(`Computador - Cartas: ${comprarCarta().texto}, ${comprarCarta().texto} - pontuação: ${computador}`)
    
       if (usuario === computador) {
          console.log("Empate.")
       } else if (usuario > computador && usuario <= 21) {
          console.log("O usuário ganhou.")
       } else if (computador > usuario && computador <= 21) {
          console.log("O computador ganhou.")
       } else if (usuario > 21 && computador <= 21) {
          console.log("O computador ganhou.")
       } else if (computador > 21 && usuario <= 21) {
          console.log("O usuário ganhou.")   
       }
    } else {
       console.log("O jogo acabou.")
    }
    
    