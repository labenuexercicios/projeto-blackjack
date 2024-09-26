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

const recepcao = alert("Boas-Vindos ao Jogo de BlackJack!")

if (confirm("Quer iniciar um nova rodada?")) {
   alert("Seja Bem Vindo")
   console.log("Seja Bem Vindo");
} else {
   alert("O jogo acabou")
}

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

let usuarioCarta1 = comprarCarta()
let usuarioCarta2 = comprarCarta()

let computadorCarta1 = comprarCarta()
let computadorCarta2 = comprarCarta()

/* console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) */

const cartasUsuario = usuarioCarta1.texto + usuarioCarta2.texto
const cartasComputador = computadorCarta1.texto + computadorCarta2.texto

const pontuacaoUsuario = usuarioCarta1.valor + usuarioCarta2.valor
const pontuacaoComputador = computadorCarta1.valor + computadorCarta2.valor

console.log(cartasUsuario);
console.log(pontuacaoUsuario);

console.log(cartasComputador);
console.log(pontuacaoComputador);


if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario == 21) {
   console.log("O Usuário venceu");
} else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador == 21) {
   console.log("O computador venceu");
} else if (pontuacaoUsuario && pontuacaoComputador !== 21){
   console.log("Empate");
}

