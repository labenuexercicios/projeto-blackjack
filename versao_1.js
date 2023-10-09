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
    console.log("Boas vindas ao jogo de BlackJack!");

const rodada = confirm("Quer iniciar uma nova rodada?");

if (rodada === false) {
  console.log("O jogo acabou");
} else if (rodada === true) {
  console.log("Começar novo jogo");

  const usuario1 = "Usuario 1";
  const carta1 = comprarCarta();
  const carta2 = comprarCarta();
  const usuario2 = "CPU";
  const carta3 = comprarCarta();
  const carta4 = comprarCarta();

  console.log(`${usuario1} - cartas: ${carta1.texto} ${carta2.texto} - pontuação = ${carta1.valor + carta2.valor}`);
  console.log(`${usuario2} - cartas: ${carta3.texto} ${carta4.texto} - pontuação = ${carta3.valor + carta4.valor}`);

  if (carta1.valor + carta2.valor === carta3.valor + carta4.valor) {
    console.log("Empate");
  } else if (carta1.valor + carta2.valor < carta3.valor + carta4.valor) {
    console.log(`O ${usuario2} venceu!!!`);
  } else if (carta1.valor + carta2.valor === 21) {
    console.log(`O ${usuario1} venceu!!!`);
  } else if (carta3.valor + carta4.valor === 21) {
    console.log(`O ${usuario2} venceu !!!`);
  } else {
    console.log(`O ${usuario1} venceu !!!!`);
  }

  console.log("FIM DE JOGO");
}