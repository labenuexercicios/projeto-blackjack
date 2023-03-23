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

//boas vindas 
console.log(`Boas vindas ao jogo de BlackJack!`)
//CRIANDO A DISTRIBUIÇÃO DAS CARTAS
const cartaUser1 = comprarCarta()
const cartaUser2 = comprarCarta()
const cartaPc1 = comprarCarta()
const cartaPc2 = comprarCarta()
//CRIANDO A VARIÁVEL COM O RESULTADO DA SOMA DAS 2 CARTAS
const resultadoCartasUser = cartaUser1.valor + cartaUser2.valor 
const resultadoCartasPc = cartaPc1.valor + cartaPc2.valor
//LÓGICA
function gameBlackJack (){
//Criando frase
const fraseNewGame = confirm(`Quer iniciar uma nova rodada?`)
if (fraseNewGame) {
   console.log(`Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - ${resultadoCartasUser}`)
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - ${resultadoCartasPc}
`)
} else {
   console.log(`O jogo acabou.`)
}
//LOGICA RESULTADO FINAL
if (resultadoCartasUser > resultadoCartasPc) {
   console.log(`O usuário ganhou!`)
} else if (resultadoCartasUser === resultadoCartasPc) {
   console.log(`Empate!`)
} else {
   console.log(`O computador ganhou!`)
}
//LOGICA DO ESTOURO
if (resultadoCartasUser > 21){
   console.log(`O usuario estourou, computador ganhou!`)
} else if(resultadoCartasPc > 21){
   console.log(`O computador estourou, usuário ganhou!`)
} else if (resultadoCartasPc && resultadoCartasUser > 21){
   console.log(`ESTOURO DUPLO!`)
}
}
//
gameBlackJack ()

