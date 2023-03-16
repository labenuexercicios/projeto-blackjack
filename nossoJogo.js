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

let iniciarJogo = confirm("Quer iniciar uma nova rodada?");

function jogoBrackJack() {
  if (iniciarJogo) {
    let usuarioCarta1 = comprarCarta();
    let usuarioCarta2 = comprarCarta();
    let computarCarta1 = comprarCarta();
    let computarCarta2 = comprarCarta();

    let usuarioPontuacao = usuarioCarta1.valor + usuarioCarta2.valor;
    let computadorPontuacao = computarCarta1.valor + computarCarta2.valor;

    console.log(
      `Usuário - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto} - pontuação ${usuarioPontuacao}`
    );
    console.log(
      `Computador - cartas: ${computarCarta1.texto} ${computarCarta2.texto} - pontuação ${computadorPontuacao}`
    );

    if (usuarioPontuacao > computadorPontuacao) {
      console.log(`O usuário ganhou!`);
    } else if (computadorPontuacao > usuarioPontuacao) {
      console.log(`O computador ganhou!`);
    } else if (usuarioPontuacao === computadorPontuacao) {
      console.log(`Empate!`);
    }
  } else {
    console.log(`O jogo acabou`);
  }
}

jogoBrackJack();
