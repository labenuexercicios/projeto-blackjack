
//EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

/*const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
 
console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

console.log(carta);*/

console.log("Boas vindas ao jogo de BlackJack");


//console.log(prompt("quer iniciar uma nova rodada?"));
if (confirm("Quer iniciar um novo jogo?")) { // o que fazer se o usuário clicar "ok"

   const cartaUmJogador = comprarCarta();

   const cartaDoisJogador = comprarCarta();

   const pontosJogador = cartaUmJogador.valor + cartaDoisJogador.valor

   console.log(`Jogador - cartas: ${cartaUmJogador.texto} ${cartaDoisJogador.texto} - pontuação ${pontosJogador}`);



   const cartaUmComp = comprarCarta();

   const cartaDoisComp = comprarCarta();

   const pontosComp = cartaUmComp.valor + cartaDoisComp.valor

   console.log(`Computador - cartas: ${cartaUmComp.texto} ${cartaDoisComp.texto} - pontuação ${pontosComp}`);

   if (pontosJogador === pontosComp) {
      console.log("Deu empate");
   } else if (pontosJogador < pontosComp) { 
      console.log("O computador ganhou"); 
   }else {console.log("O Jogador ganhou")}



} else { // o que fazer se o usuário clicar "cancelar"

   console.log("O jogo acabou");




}
