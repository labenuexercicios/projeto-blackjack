console.log("BlackJack: Rodada Única")

function comprarCarta() {

   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

   const naipes = ["♦️", "♥️", "♣️", "♠️"]

   const numero = cartas[Math.floor(Math.random() * 13)]

   const naipe = naipes[Math.floor(Math.random() * 4)]

   let valor


   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
   } else {
      valor = Number(numero)
   }


   const carta = {
      texto: numero + naipe,
      valor: valor

   }

   return carta

}

let inicio = confirm("Bem vindo ao BlackJack!\nGostaria de iniciar o jogo?")
if (inicio == true) {
   let usuario
   let pontos = 0
   let cards
   let cards2

   for (let i = 0; i < 2; i++) {
      usuario = comprarCarta()
      if (i == 0) {

         pontos = usuario.valor
         cards = usuario.texto


      } else {
         pontos += usuario.valor
         cards2 = usuario.texto
      }


   }
   console.log(`Jogador 1 - Cartas: ${cards} ${cards2}, Pontuação: ${pontos}`)

   let computador
   let pontos2 = 0
   let cards3
   let cards4

   for (let i = 0; i < 2; i++) {
      computador = comprarCarta()
      if (i == 0) {

         pontos2 = computador.valor
         cards3 = computador.texto


      } else {
         pontos2 += computador.valor
         cards4 = computador.texto
      }

   }



   console.log(`Computador - Cartas: ${cards3} ${cards4}, Pontuação: ${pontos2}`)

   if ((pontos > 21 && pontos2 <= 21) || (pontos2 > pontos)) {
      console.log("Você perdeu!")
   } else if ((pontos > pontos2) || ((pontos <= 21) && (pontos2 > 21))) {
      console.log("Você venceu!")
   } else if (pontos == pontos2) {
      console.log("Jogo empatado!")

   }
} else { alert("Até a próxima oportunidade.") }