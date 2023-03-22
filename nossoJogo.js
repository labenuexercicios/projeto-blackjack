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
    
    
    const inicio = confirm(`Boas vindas ao jogo de BlackJack! Quer iniciar uma nova jogada?`) 
    const carta = comprarCarta()
    const carta1 = comprarCarta()
    
       
    

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️" 

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

console.log(carta1.texto) 
// imprime o texto da carta. Nesse caso: "K♦️" 

console.log(carta1.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

console.log(`Usuário - cartas: ${carta.texto} - pontuação ${carta.valor}`)
console.log(`Computador - cartas: ${carta1.texto}- pontuação ${carta1.valor}`)





      




 
