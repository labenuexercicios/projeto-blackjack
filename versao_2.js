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

//INICIO
let inicio = confirm("Quer iniciar uma nova rodada?")
if (inicio === true) {
   alert("Boas-vindas ao jogo de BlackJack")
} else {
   alert("fim de jogo")
}

const carta = comprarCarta();

let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()

let computadorC1 = comprarCarta()
let computadorC2 = comprarCarta()

//CARTAS
let cartaCpu = alert(`A primeira carta sorteada ao computador foi ${computadorC1.texto}`)

let userCartas = [cartaUsuario1.texto + cartaUsuario2.texto]

//PONTUACAO
let pontuacaoUser = [cartaUsuario1.valor + cartaUsuario2.valor]
let pontuacaoCpu = computadorC1.valor + computadorC2.valor

//LOGICA CONTINUAR JOGANDO
let continuarJogando = confirm(`Suas cartas são ${userCartas}.\n Deseja comprar mais cartas?`)

if (continuarJogando == true) {
   let comprarCartas = true;
   while (comprarCartas && pontuacaoUser < 21) {
      userCartas += 
      pontuacaoUser.push(userCartas)
      if (pontuacaoUser < 21) {
         console.log(`pontuação inferior à 21 ${pontuacaoUser}`);
      } else if (pontuacaoUser == 21) {
         console.log("atingiu os 21 pontos");
      }
   }
}

//CONFERÊNCIA
console.log(pontuacaoUser);

//FINALIZAÇÃO
let avisoResultado = `As Cartas do Usuário são ${cartaUsuario1.texto} e ${cartaUsuario2}. Sua pontuação foi ${pontuacaoUser}.\n Já o Computador teve como cartas ${computadorC1.texto} e ${computadorC2.texto}. Sua pontuação foi ${pontuacaoCpu}`


if (pontuacaoUser > 21 || (pontuacaoCpu <= 21 && pontuacaoCpu > pontuacaoUser)) {
   alert(`${avisoResultado}\n O computador ganhou!`)
} else if (pontuacaoCpu > 21 || (pontuacaoUser <= 21 && pontuacaoUser > pontuacaoCpu)) {
   alert(`${avisoResultado}\n O usuário ganhou, parabéns!!!`)
} else {
   alert(`${avisoResultado}\n "Empate"!`)
}






