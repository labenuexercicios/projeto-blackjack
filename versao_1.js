alert("Boas vindas ao jogo de BlackJack!");

console.log("Boas vindas ao jogo de BlackJack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  console.log("Nova rodada iniciada!");

  // Inserir código para construir a rodada aqui

} else {
   alert("O jogo acabou.")
   console.log("O jogo acabou.");
}

// Função para sortear uma carta
function comprarCarta() {
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
   const valores = [
     "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
   ]
 
   const naipe = naipes[Math.floor(Math.random() * 4)]
   const valor = valores[Math.floor(Math.random() * 13)]
 
   let pontuacao = 0
 
   if (valor === "A") {
     pontuacao = 11
   } else if (valor === "J" || valor === "Q" || valor === "K") {
     pontuacao = 10
   } else {
     pontuacao = Number(valor)
   }
 
   const carta = {
     texto: valor + naipe,
     valor: pontuacao
   }
 
   return carta
 }
 
 // Sortear cartas para o usuário e o computador
 const cartaUsuario1 = comprarCarta()
 const cartaUsuario2 = comprarCarta()
 const cartaComputador1 = comprarCarta()
 const cartaComputador2 = comprarCarta()
 
 // Calcular pontuações
 const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
 const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
 
 // Exibir informações no console
 console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "- pontuação", pontuacaoUsuario)
 console.log("Computador - cartas:", cartaComputador1.texto, cartaComputador2.texto, "- pontuação", pontuacaoComputador)
 
 // Verificar o vencedor ou empate
 if (pontuacaoUsuario === pontuacaoComputador) {
   alert("Empatou,que pena.")
   console.log("Empate!")
 } else if (pontuacaoUsuario > pontuacaoComputador) {
  alert("Você ganhou!")
   console.log("Você ganhou!")
 } else {
   alert("O computador ganhou!")
   console.log("O computador ganhou!")
 }

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