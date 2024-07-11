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
   let ConcatenaCartasJogador = ""
   let ConcatenaCartasComputador = ""
   let somaJogador = 0
   let somaComputador = 0

   MaoDoJogador.push(comprarCarta(), comprarCarta())
   MaoDoComputador.push(comprarCarta(), comprarCarta())
   // somaJogador = MaoDoJogador[0].valor + MaoDoJogador[1].valor
   // somaComputador = MaoDoComputador[0].valor + MaoDoComputador[1].valor;


   while (MaoDoJogador[0].valor === 11 && MaoDoJogador[1].valor === 11 || MaoDoComputador[0].valor === 11 && MaoDoComputador[1].valor) {

      MaoDoJogador = []
      MaoDoComputador = []
      somaJogador = 0
      somaComputador = 0
      MaoDoJogador.push(comprarCarta(), comprarCarta())
      MaoDoComputador.push(comprarCarta(), comprarCarta())
      console.log("To dentro do primeiro while");
      somaJogador = MaoDoJogador[0].valor + MaoDoJogador[1].valor
      somaComputador = MaoDoComputador[0].valor + MaoDoComputador[1].valor;
   }

 for (let i = 0; i < MaoDoJogador.length; i++) {

      somaJogador = somaJogador + MaoDoJogador[i].valor;
      console.log(MaoDoJogador[i].valor);

      ConcatenaCartasJogador += MaoDoJogador[i].texto + " "

   }
console.log(ConcatenaCartasJogador);

   while (confirm(`Suas cartas são ${ ConcatenaCartasJogador}\n A carta do Computador é ${MaoDoComputador[0].texto}. \n Quer comprar mais uma carta?`) && somaJogador <= 21) {

      MaoDoJogador.push(comprarCarta())
      somaJogador = 0
      ConcatenaCartasJogador = ""

      for (let i = 0; i < MaoDoJogador.length; i++) { //Essa estrutura for é igual a de cima. Dá para transformar em função. 

         somaJogador = somaJogador + MaoDoJogador[i].valor;
         console.log(MaoDoJogador[i].valor);
   
         ConcatenaCartasJogador += MaoDoJogador[i].texto + " "
   
      }

   }

   console.log(MaoDoJogador);
   console.log(ConcatenaCartasJogador);
   console.log(somaJogador);
   if (somaJogador > 21) {
      console.log("Deu mais que 21. Você perdeu");

   }

}
else {
   alert("AHHHHH que peninha")
}




