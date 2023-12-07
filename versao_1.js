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
console.log(`Boas vindas ao jogo de BlackJack!`);

if (confirm('Quer iniciar uma nova rodada?')) {
   // cartas Usuário
   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   let valorTotalUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
   console.log(`Usuário - Cartas: ${cartaUsuario1.texto} - ${cartaUsuario2.texto} - pontuação ${valorTotalUsuario}`);

   // cartas Computador
   const cartaMaq1 = comprarCarta();
   const cartaMaq2 = comprarCarta();
   let valorTotalMaq = cartaMaq1.valor + cartaMaq2.valor;
   console.log(`Computador - Cartas: ${cartaMaq1.texto} - ${cartaMaq2.texto} - pontuação ${valorTotalMaq}`);

   if (valorTotalUsuario > valorTotalMaq) {
      console.log('O usuário ganhou!');
   } else if (valorTotalUsuario === valorTotalMaq) {
      console.log('Empate!');
   } else {
      console.log('O computador ganhou!');
   }


} else {
   console.log(`O jogo acabou!`);
};