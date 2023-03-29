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
if(confirm(`Boas vindas ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)){
const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()
let somaComputador = cartaComputador1.valor + cartaComputador2.valor
let cartasUsuario = [cartaUsuario1.texto, cartaUsuario2.texto]
let confirmaUsuario = confirm(`Usuário - Cartas: ${cartasUsuario} Computador - Cartas: ${cartaComputador1.texto}. Deseja comprar mais uma carta?`) 
for(i = 0; confirmaUsuario; i++){         
let cartaNova = comprarCarta()
let cartaTexto = cartaNova.texto
cartasUsuario.push(cartaTexto)
somaUsuario = somaUsuario + cartaNova.valor
if(somaUsuario > 21){
break;
}
}
let cartasComputador = [cartaComputador1.texto, cartaComputador2.texto]  
if(somaUsuario <= 21){
for(i = 0; somaComputador <= somaUsuario; i++){
let cartaNova = comprarCarta()
let cartaTexto = cartaNova.texto
cartasComputador.push(cartaTexto)
somaComputador = somaComputador + cartaNova.valor           
if(somaComputador > 21){
break;
}
}
}
if(somaUsuario <= 21 && (somaUsuario > somaComputador || somaComputador > 21 )){
alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} Computador - Cartas: ${cartasComputador} - Pontuação: ${somaComputador}. O usuário ganhou!`)         
}else if((somaComputador > somaUsuario && somaComputador <= 21) || somaUsuario > 21){
alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} Computador - Cartas: ${cartasComputador} - Pontuação: ${somaComputador}. O computador ganhou!`)    
}else if(somaUsuario === somaComputador) {
alert(`Usuário - Cartas: ${cartasUsuario} - Pontuação: ${somaUsuario} Computador - Cartas: ${cartasComputador} - Pontuação: ${somaComputador}. Empate!`)   
}
}else{
alert('O jogo acabou.')
} 