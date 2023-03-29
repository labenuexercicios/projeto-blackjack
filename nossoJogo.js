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
alert("Boas vindas ao jogo de BlackJack!")
console.log("Boas vindas ao jogo de BlackJack!")
let inicioRodada = confirm("Quer iniciar uma nova rodada?")

if(inicioRodada){
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const somaUsuario1 = cartaUsuario1.valor + cartaUsuario2.valor
   const cartaComp1 = comprarCarta()
   const cartaComp2 = comprarCarta()
   const somaComp1 = cartaComp1.valor + cartaComp2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} => pontuação total = ${somaUsuario1} pontos.`)
   console.log(`Computador - cartas: ${cartaComp1.texto} e ${cartaComp2.texto} => pontuação total = ${somaComp1} pontos.`)
   
   if(somaUsuario1 > 21){
      console.log("Usuário estourou a pontuação, Computador Ganhouu!!!")
   } else if(somaComp1 > 21){
      console.log("Computador estourou a pontuação, Usuário Ganhouu!!!")
   } else if(somaUsuario1 > somaComp1){
      console.log("O Usuário Ganhouu!!!")
   } else if(somaUsuario1 < somaComp1) {
      console.log("O Computador Ganhouu!!! Já era! as máquinas vão dominar o mundo =o")
   } else if(somaUsuario1 === somaComp1){
      console.log("Empatouu!!!")
   }


} else{
   console.log("O jogo acabou!")
}