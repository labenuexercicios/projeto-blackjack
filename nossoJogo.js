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

// PROJETO BLACK JACK


console.log("Boas vindas ao jogo de BlackJack!")

const usuarioCarta1 = comprarCarta()
const usuarioCarta2 = comprarCarta()
const pcCarta1 = comprarCarta()
const pcCarta2 = comprarCarta()
const fraseFim = "O jogo acabou"
const pontosUsuario = usuarioCarta1.valor + usuarioCarta2.valor
const pontosPc = pcCarta1.valor + pcCarta2.valor

const novoJogo = confirm("Você gostaria de iniciar um novo jogo?")

function jogarCartas(){

if (novoJogo !== true){
      console.log(fraseFim)
      

   }else if (novoJogo === true ){
      console.log(`Usuário - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto} - pontuação ${pontosUsuario}`)
      console.log(`Computador - cartas: ${pcCarta1.texto} ${pcCarta2.texto} - pontuação ${pontosPc}`)

      if (pontosUsuario > pontosPc){
      console.log("Usuário ganhou!")
     
      }else if (pontosPc > pontosUsuario){
      console.log("Computador ganhou!")

      } else if (pontosUsuario === pontosPc){
      console.log("Empate!")

}else{
   console.log("O jogo acabou")
      }
   }   
}

jogarCartas()