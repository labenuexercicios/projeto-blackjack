//alert("Bem-vinde ao jogo de Blackjack!");

if (confirm("Bem-vinde ao Grande jogo Blackjack 2.0!"+ "\n" +"Deseja iniciar uma nova rodada?")) {
  let jogador = [];
  let computador = [];

  // Sortear 2 cartas iniciais
  let cartasOk = false;
  while (!cartasOk) {
    jogador.push(comprarCarta());
    jogador.push(comprarCarta());
    computador.push(comprarCarta());
    computador.push(comprarCarta());
    if ((jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)) {
      jogador = [];
      computador = [];
    } else {
      cartasOk = true;
    }
  }

  // Mostrar cartas do usuário e primeira do computador
  // Perguntar se o usuário deseja comprar mais até que ele diga que não
  let comprando = true;
  while (comprando) {
    let textos = "";
    let pontos = 0;
    for (let carta of jogador) {
      textos += carta.texto + " ";
      pontos += carta.valor;
    }

    if (pontos > 21) {
      comprando = false;
    } else {
      let confirmCompra = confirm(
        `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
        "\n" +
        "Deseja comprar mais uma carta?"
      );

      if (confirmCompra) {
        jogador.push(comprarCarta());
      } else {
        comprando = false;
      }
    }
  }

  // Cálculo dos pontos do usuário e do computador
  let pontosComputador = 0;
  let pontosJogador = 0;
  let textosComputador = "";
  let textosJogador = "";

  for (let carta of computador) {
    pontosComputador += carta.valor;
    textosComputador += carta.texto + " ";
  }
  for (let carta of jogador) {
    pontosJogador += carta.valor;
    textosJogador += carta.texto + " ";
  }

  // Compra de cartas do computador
  if (pontosJogador <= 21) {
    while (pontosComputador < pontosJogador && pontosComputador <= 21) {
      computador.push(comprarCarta());
      pontosComputador = 0;
      textosComputador = "";
      for (let carta of computador) {
        pontosComputador += carta.valor;
        textosComputador += carta.texto + " ";
      }
    }
  }

  let resultado = "";

  // Verificação de quem ganhou
  if (pontosJogador > pontosComputador && pontosJogador <= 21) {
    resultado = "O usuário ganhou!";
  } else if (pontosComputador > pontosJogador && pontosComputador <= 21) {
    resultado = "O computador ganhou!";
  } else if (pontosComputador > 21 && pontosJogador <= 21) {
    resultado = "O usuário ganhou!";
  } else if (pontosJogador > 21 && pontosComputador <= 21) {
    resultado = "O computador ganhou!";
  } else {
    resultado = "Empate!";
  }

  // Imprimir cartas dos dois lados
  alert(
    `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` +
    "\n" +
    `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` +
    "\n" +
    resultado
  );
} else {
  alert("Fim do jogo.");
}
