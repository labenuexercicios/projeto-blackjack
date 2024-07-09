/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

if (confirm("Quer iniciar um novo jogo?")) {

   let MaoDoJogador = []
   let MaoDoComputador = []
   let somaJogador = 0
   let somaComputador = 0

   MaoDoJogador.push(comprarCarta(), comprarCarta())
   MaoDoComputador.push(comprarCarta(), comprarCarta())
   somaJogador = MaoDoJogador[0].valor+MaoDoJogador[1].valor
   somaComputador = MaoDoComputador[0].valor+MaoDoComputador[1].valor;


   while (MaoDoJogador[0].valor === 11 && MaoDoJogador[1].valor === 11 || MaoDoComputador[0].valor === 11 && MaoDoComputador[1].valor) {

      MaoDoJogador = []
      MaoDoComputador = []
      somaJogador = 0
      somaComputador = 0
      MaoDoJogador.push(comprarCarta(), comprarCarta())
      MaoDoComputador.push(comprarCarta(), comprarCarta())
      console.log("To dentro do while");
      somaJogador = MaoDoJogador[0].valor+MaoDoJogador[1].valor
      somaComputador = MaoDoComputador[0].valor+MaoDoComputador[1].valor;
   }

   alert(`Suas cartas são ${MaoDoJogador[0].texto} e ${MaoDoJogador[1].texto} \n A carta do Computador é ${MaoDoComputador[0].texto}`)

   while (confirm("Quer comprar mais uma carta?")) {

      MaoDoJogador.push(comprarCarta())

      
      // alert(`Suas cartas são ${MaoDoJogador[0].texto} e ${MaoDoJogador[1].texto} \n A carta do Computador é ${MaoDoComputador[0].texto}`)

      alert(" Agora você tem as cartas: To no segundo while");
      }






   console.log(MaoDoJogador, MaoDoComputador);
















} else {
   alert("AHHHHH que peninha")

}




