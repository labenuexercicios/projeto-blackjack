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

console.log("Boas vindas ao jogo de BlackJack !")


if(confirm("Quer iniciar uma nova rodada ?")){
   
//Minhas cartas
const carta1 = comprarCarta()
const carta2 = comprarCarta()
        
//Cartas do Pc
const carta1Pc = comprarCarta()
const carta2Pc = comprarCarta()
    
//Meu total  
const minhaPontuacao = carta1.valor + carta2.valor

//Total do pc
const pontuacaoPc = carta1Pc.valor + carta2Pc.valor
   
   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${minhaPontuacao}`)
   
   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)
    
if (minhaPontuacao > pontuacaoPc){
   console.log("O usuário ganhou !")
      
   } else if (pontuacaoPc > minhaPontuacao){
      console.log("O pc ganhou !")
      
   } else if (minhaPontuacao === pontuacaoPc){
      console.log("Empate !")
      
   }
}else {
   console.log("O jogo acabou")
}