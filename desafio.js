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
/*function desafio21 (){
let usuario = []
let computador = []

let iniciar = confirm(`Bem vindo(a) ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)

   if(iniciar){
      let cartasJogo = false
      while(!iniciar){
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())
         if(usuario[0].valor === 11 && usuario[1].valor === 11 ||
            computador[0].valor === 11 && computador[1].valor ){

            usuario = []
            computador = []
         }else{
            cartasJogo = true
         }
      }
      computador[0].texto = `Carta do computador revelada`
      computador[0].valor = 0

      alert(`Usuário: ${usuario[0].texto} ${usuario[1].texto}
      Computador: ${computador[0].texto} ${computador[1].texto}`)
      

      }
   }
desafio21 ()*/

function desafio21 (){
   confirm(`Bem vindo(a) ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)
   const carta = comprarCarta() 
   
}





