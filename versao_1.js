
 //EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
    /*const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

console.log(carta);*/

console.log("Boas vindas ao jogo de BlackJack");


//console.log(prompt("quer iniciar uma nova rodada?"));
if(confirm("Quer iniciar um novo jogo?")) { // o que fazer se o usuário clicar "ok"

   const cartaUmDoUsuario = comprarCarta()
   const valorUmDoUsuario = valor
   const cartaDoisDoUsuario = comprarCarta()
   const valorDoisDoUsuario = valor
   console.log(cartaUmDoUsuario,valorUmDoUsuario,cartaDoisDoUsuario,valorDoisDoUsuario);



   console.log("Usuário - cartas: __ __ - pontuação ___");
   console.log("Computador - cartas: __ __ - pontuação ___");







   console.log("clicou ok");
   } else { // o que fazer se o usuário clicar "cancelar"

   console.log("O jogo acabou");




   }
