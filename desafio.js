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
   // VARIAVEIS
         let jogador = []
         let bot = []

    alert("Bem-vindo ao jogo do BlackJack!")
    if(confirm("Quer iniciar uma nova rodada?")){
      let cartas = true
         while(cartas){
               jogador.push(comprarCarta())
               jogador.push(comprarCarta())
               bot.push(comprarCarta())
               bot.push(comprarCarta())
         }
    }

    // Mostrar carta para o usuário

    let cartas = true
      while(cartas){
         let pontos = 0
         let cartaTexto = String
            for(let carta of jogador){
               cartaTexto += carta.texto
               pontos += carta.valor
            }
            if(pontos > 21) {
               cartas = false
            } else {
               let comprarMaisCarta = confirm(`Suas cartas são ${cartas}, a carta revelada do computador é ${bot[0].texto}
               Deseja comprar mais uma carta?`)
            } 
               if(comprarMaisCarta){
                  jogador.push(comprarCarta())
               } else { cartas = false }

   // Pontos do usuário e do computador 
   let pontosBot = 0
   let cartasBot = ""
   let pontosUsuario = 0
   let cartasUsuario = ""

   for( let carta of bot) {
      pontosBot =+ carta.valor
      cartasBot += carta.texto
   }

   for (let carta of jogador){
      pontosUsuario += carta.valor
      cartasUsuario += carta.texto
   }

if(pontosUsuario < 21){
   while(pontosUsuario > pontosBot && pontosBot <= 21){
      bot.push(comprarCarta())
      pontosBot = 0
      cartasBot = ""
         for (let carta of bot){
            pontosBot += carta.valor
            cartasBot += carta.texto
         }
   }
}

let resultado = ""

if(pontosUsuario > pontosBot && pontosUsuario <= 21){
   resultado = 'O usuário ganhou!'
} else if (pontosUsuario >! pontosBot && pontosBot <= 21){
   resultado = 'O Computador ganhou!'
} else if(pontosBot > 21 && pontosUsuario <=21){
   resultado = 'O Usuário ganhou!'
} else if(pontosUsuario > 21 && pontosBot <= 21){
   resultado = 'O Computador ganhou!'
} else {
   resultado = 'Empate!'
}
      }

alert(`Usuario - Cartas: ${cartasUsuario} - Pontuação: ${pontosUsuario}` + 
"\n" + 
`Computador - Cartas: ${cartasBot} - Pontuação: ${pontosBot}` + 
"\n" + 
resultado)