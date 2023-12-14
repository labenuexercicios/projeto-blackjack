/* // Função para criar e embaralhar o baralho
function criarBaralho() {
  const naipes = ["♥️", "♣️", "♦️", "♠️"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const baralho = [];

  for (const naipe of naipes) {
    for (const numero of numeros) {
      const carta = {
        texto: `${numero}${naipe}`,
        valor: numero === "A" ? 11 : numero === "J" || numero === "Q" || numero === "K" ? 10 : parseInt(numero)
      };
      baralho.push(carta);
    }
  }

  return baralho.sort(() => Math.random() - 0.5);
}

// Função para comprar uma carta do baralho
function comprarCarta(baralho) {
  return baralho.pop();
}

// Função para calcular a pontuação de uma mão
function calcularPontuacao(mao) {
  let pontuacao = 0;
  let asCount = 0;

  for (const carta of mao) {
    pontuacao += carta.valor;

    if (carta.valor === 11) {
      asCount++;
    }
  }

  while (asCount > 0 && pontuacao > 21) {
    pontuacao -= 10;
    asCount--;
  }

  return pontuacao;
}

// Função para exibir a mão de um jogador
function exibirMao(mao, jogador) {
  console.log(`${jogador} - cartas: ${mao.map(carta => carta.texto).join(" ")} - ${calcularPontuacao(mao)}`);
}

// Boas-vindas ao jogo
console.log("Bem-vindo(a) ao jogo de Blackjack 1.0");

// Iniciar uma nova rodada
let novoJogo = confirm("Iniciar uma nova rodada?");
if (novoJogo) {
  // Criar e embaralhar o baralho
  let baralho = criarBaralho();

  // Comprar cartas para o usuário e o computador
  let maoUsuario = [comprarCarta(baralho), comprarCarta(baralho)];
  let maoComputador = [comprarCarta(baralho), comprarCarta(baralho)];

  // Exibir as cartas dos jogadores
  exibirMao(maoUsuario, "Usuário");
  exibirMao(maoComputador, "Computador");

  // Determinar o vencedor
  if (calcularPontuacao(maoUsuario) > calcularPontuacao(maoComputador)) {
    console.log("O usuário ganhou!");
  } else if (calcularPontuacao(maoComputador) > calcularPontuacao(maoUsuario)) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  console.log("Fim do jogo ");
}
 */