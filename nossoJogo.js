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

const bemVindo = console.log('Bem-vindo(a) ao jogo de blackjack')
const comeco = confirm('Quer iniciar uma nova rodada? ')
let resultadoUsuario
let resultadoComputador

function compraCartaUsuario(){
   for(let i = 0; i <= 0; i++){
      const carta1 = comprarCarta()
      const carta2 = comprarCarta()
      resultadoUsuario = carta1.valor + carta2.valor
      const mensagem = `Usuário - cartas: ${carta1.texto} ${carta2.texto} = ${resultadoUsuario}`
      return mensagem
   }
  
}

function compraCartaComputador(){
   for(let i = 0; i <= 0; i++){
      const carta1 = comprarCarta()
      const carta2 = comprarCarta()
      resultadoComputador = carta1.valor + carta2.valor
      const mensagem = `Computador - cartas: ${carta1.texto} ${carta2.texto} = ${resultadoComputador}`
      return mensagem
   }
  
}

function verificaGanhador(){
   if(resultadoComputador > 21 && resultadoComputador > resultadoUsuario){
      console.log('Usuário venceu!')
   }else if(resultadoUsuario > 21 && resultadoUsuario > resultadoComputador){
      console.log('Computador venceu!')
   }else if (resultadoComputador === resultadoUsuario) {
      console.log('Empatou!')
   }else{
      if(resultadoComputador > resultadoUsuario){
      console.log('Computador venceu!')
      }else {
      console.log('Usuário venceu!')
      }
}
}

if(comeco === false){
   console.log('O jogo acabou')
}else{
   console.log(compraCartaUsuario())
   console.log(compraCartaComputador())
   console.log(verificaGanhador())
}
