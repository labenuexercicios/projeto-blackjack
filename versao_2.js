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

let usuario1 = comprarCarta();
let usuario2 = comprarCarta();
let computador1 = comprarCarta();
let computador2 = comprarCarta();

let cartasJogador = [usuario1, usuario2]
let cartasComputador = [computador1, computador2]

let somaUsuario = usuario1.valor + usuario2.valor
let somaComputador = computador1.valor + computador2.valor

const querJogar = confirm("Bem-vinde ao jogo de blackjack! \n Deseja iniciar uma nova rodada?")

let mensagem = `Suas cartas são ${usuario1.texto} ${usuario2.texto}.  A carta revelada do computador é 
${computador1.texto}  \n  Deseja comprar mais uma carta?`

if (querJogar) {
   let comprarMaisCarta = true;
   while(comprarMaisCarta && somaUsuario <= 21){
      let novaCartaJogador = comprarCarta()
      cartasJogador.push(novaCartaJogador)
      somaUsuario += novaCartaJogador.valor
      if (somaUsuario <= 21)
      comprarMaisCarta = confirm(`Suas cartas são ${cartasJogador.map(carta => carta.texto).join(' ')} \n Deseja comprar mais uma carta?`);
   
   }
} else {
   confirm("O jogo Acabou!")
}

let mensagem2 = `Usuário - Cartas:  ${usuario1.texto} ${usuario2.texto}  -  Pontuaçäo ${somaUsuario} 
Computador - Cartas:  ${computador1.texto} ${computador2.texto} - Pontuaçäo ${somaComputador}`

if (somaUsuario > 21 || (somaComputador <= 21 && somaComputador > somaUsuario)) {
   alert(`${mensagem2} \n O Computador ganhou!`)
} else if (somaComputador > 21 || (somaUsuario <= 21 && somaUsuario > somaComputador)) {
   alert(`${mensagem2} \n O usuario ganhou!`)
} else {
   alert(`${mensagem2}  \n "Empate!`)
}
