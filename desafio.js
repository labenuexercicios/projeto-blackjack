// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  *
//  *
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  *
//  *
//  *
//  */

function desafioBlackJack() {
  let novaRodada = confirm(`Bem vindo ao jogo de BlackJack
Quer iniciar uma nova rodada?`);

  let jogador = [];
  let computador = [];

  //JOGADOR/COMPUTADOR COMPRANDO AS CARTAS

  if (novaRodada) {
    let darCartas = false;

    while (!darCartas) {
      jogador.push(comprarCarta());
      jogador.push(comprarCarta());
      computador.push(comprarCarta());
      computador.push(comprarCarta());
      // VERIFICAÇÃO DO AS
      if (
        (jogador[0].valor === 11 && jogador[1].valor === 11) ||
        (computador[0].valor === 11 && computador[1].valor === 11)
      ) {
        jogador = [];
        computador = [];
      } else {
        darCartas = true;
      }
    }

    computador[0].texto = `CARTA REVELADA `;
    computador[0].valor = 0;

    // MOSTRANDO AS CARTAS DO JOGADOR 1 A PRIMEIRA COMPUTADOR

    let textoJogador = `Jogador: `;
    //${jogador[0].texto} ${jogador[1].texto}
    //CÓDIGO DENTRO DAS STRINGS

    let textoComputador = `Computador: ${computador[0].texto} `;
    //${computador[1].texto}
    //CÓDIGO DENTRO DAS STRINGS

    let valorJogador = 0;
    let valorComputador = 0;

    for (let i = 0; i < jogador.length; i++) {
      textoJogador += jogador[i].texto + "";
      valorJogador += jogador[i].valor;
    }

    for (let i = 0; i < computador.length; i++) {
      if (i === 0) {
        continue;
      }
      textoComputador += computador[i].texto + " ";
      valorComputador += computador[i].valor;
    }

    let continuarComprandoCarta = true;

    while (continuarComprandoCarta) {
      if (valorJogador > 21) {
        break;
      }
      //${computador[0].texto}
      let novaCarta = confirm(`
        ${textoJogador}
        A carta revelada do computador é: 
        ${computador[0].texto} ${computador[1].texto}        
        "Deseja comprar mais uma carta?"`);
      if (novaCarta) {
        let cartas = comprarCarta();
        jogador.push(cartas);
        valorJogador += cartas.valor;
        textoJogador += `${cartas.texto}`;
      } else {
        continuarComprandoCarta = false;
      }
    }
    /////////////////////////////////////////////////////////////////////////////

    while (valorComputador <= valorJogador && valorJogador <= 21) {
      let cartas = comprarCarta();
      computador.push(cartas);
      valorComputador += cartas.valor;
      textoComputador += `${cartas.texto}`;
    }
    let resultado = "";

    if (valorJogador > 21) {
      resultado = "COMPUTADOR GANHOU";
    } else if (valorComputador > 21) {
      resultado = "JOGADOR GANHOU";
    } else if (valorComputador > valorJogador) {
      resultado = "COMPUTADOR GANHOU";
    } else if (valorJogador > valorComputador) {
      resultado = "JOGADOR GANHOU";
    } else {
      resultado = "EMPATE";
    }

    alert(
      `${textoJogador}\nPontuação do jogador: ${valorJogador}
${textoComputador}\nPontuação do computador: ${valorComputador}\n${resultado}`
    );
  } else {
    alert(`O jogo acabou`);
  }
}
desafioBlackJack();
