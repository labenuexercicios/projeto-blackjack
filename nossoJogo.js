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
    let primeiraCartaUsuario = comprarCarta();
    let segundaCartaUsuario = comprarCarta();
    let primeiraCartaComputador = comprarCarta();
    let segundaCartaComputador = comprarCarta();

    let usuarioPontuacao = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
    let computadorPontuacao = primeiraCartaComputador.valor + segundaCartaComputador.valor;

    console.log(
      `Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${usuarioPontuacao}`
    );
    console.log(
      `Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação ${computadorPontuacao}`
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
