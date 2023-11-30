console.log('seja bem vindo ao blackjack')

const carta1= comprarCarta()
const carta2= comprarCarta()
const cartaComputador1= comprarCarta()
const cartaComputador2 = comprarCarta()

const pontuacaoUsuario = carta1.valor+ carta2.valor
const pontuacaoComputador= cartaComputador1.valor + cartaComputador2.valor

console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${pontuacaoUsuario}`);
console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${pontuacaoComputador}`);

if (pontuacaoUsuario > pontuacaoComputador){
  console.log("O usuário ganhou!")

   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou!")
      
      } else if (pontuacaoComputador === pontuacaoUsuario) {
         console.log("Empatou!")
         
         } else {
         
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