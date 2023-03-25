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
 console.log(`Boas vindas ao jogo de BlackJack! `)

 const iniciarRodada = confirm(`Quer iniciar uma nova rodada ?`)


 if(iniciarRodada === true ) {
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartasPc1 = comprarCarta()
   const cartasPc2 = comprarCarta()
   const somacartasUsuarios = cartaUsuario1.valor + cartaUsuario2.valor
   const somacartasPc = cartasPc1.valor + cartasPc2.valor


   console.log(`Primeira Carta :${cartaUsuario1.valor, cartaUsuario1.texto}
   Segunda Carta ${cartaUsuario2.valor, cartaUsuario2.texto} 
   SOMA cartas USUÁRIO: ${somacartasUsuarios}`)


   console.log(`Primeira Carta : ${cartasPc1.valor, cartasPc1.texto }
   Segunda Carta : ${cartasPc2.valor, cartasPc2.texto}
   SOMA cartas PC: ${somacartasPc}`)


   if(somacartasUsuarios > somacartasPc ) {
    console.log(`Usuário ganhou`)
   } else if (somacartasPc > somacartasUsuarios) {
     console.log(`Pc ganhou`)
   } else if (somacartasPc === somacartasUsuarios) {
     console.log(`Empate`) 
   } else {

   }
 } else {
   console.log(`O jogo acabou.`)
 }