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

   //  const carta = comprarCarta();
   //  console.log(carta.texto) 
   //  console.log(carta.valor) 

   console.log("Bem-vindo(a) ao jogo de blackjack");

   const startRound = confirm("Quer iniciar uma nova rodada?");
   const card1 = comprarCarta();
   const card2 = comprarCarta();
   const card3 = comprarCarta();
   const card4 = comprarCarta();
  const usuario = "Usuário";
  const computador = "Computador";
  const score1 = card1.valor + card2.valor;
  const score2 = card3.valor + card4.valor;

   function launchGame (card1,card2,player) {
    const score = card1.valor + card2.valor;
    console.log(`${player} - cartas: ${card1.texto} ${card2.texto} - pontuação: ${score}`);
   }

   if(startRound === true) { 
      launchGame(card1,card2,usuario);
      launchGame(card3,card4,computador);
    } else { 
      console.log("O jogo acabou"); 
    }
    
  if (score1 > score2) {
    console.log("O usuário ganhou!");
  }
  else if (score1 === score2) {
    console.log("Empate!");
  }
  else {
    console.log("O computador ganhou!");
  }



      // comprarCarta();
      // comprarCarta();
      // comprarCarta();
      // comprarCarta();
      // console.log("Usuário - cartas: Q♣️ 10♣️ - pontuação 20" );
      // console.log("Computador - cartas: Q♣️ 10♣️ - pontuação 20");
    