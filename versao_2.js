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




function pontuacao1(cartas) {

   let pontuacao1 = 0;
   let temAs = false;

   for (let i = 0; i < baralho.length; i++) {

      let cartas2 = baralho[i];

      pontuacao1 += baralho(cartas);

      if (cartas.value === 'temAs') {

         temAs = true;

      }

      if (temAs && pontuacao1 + 10 <= 21) {
         return score1 + 10;

      }

      return score1


   }

   function fimDeJogo() {

      if (fimDeJogo) {

         while (


            pontuacao1 < score1 && pontuacaoUsuario <= 21 && pontuacaoComputador <= 21


         )





            if (pontuacaoUsuario > 21) {
               console.log('o usuario perdeu')

            } else if (pontuacaoComputador > 21)
               console.log('o usuario ganhou')

            else if (fimDeJogo)
               if (pontuacaoUsuario > pontuacaoComputador)
                  console.log('usuario ganhou')



               else {

                  console.log('o usuario perdeu')
               }




      }

   }
}