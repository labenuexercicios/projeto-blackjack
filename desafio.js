
let check = true

let userCartas = []
let pcCartas = []

let pontosUser = 0
let pontosPc = 0

let userMao
let pcMao


const sorteioCartas = () => {
   for (let i = 0; i < 2; i++) {
      userCartas.push(comprarCarta())
   }

   for (let i = 0; i < 2; i++) {
      pcCartas.push(comprarCarta())
   }
}

const verificaCarta = () => {
   if (userCartas[0].texto === "A" && userCartas[1].texto === "A") {
      userCartas = []
      pcCartas = []
      sorteioCartas()
   } else if (pcCartas[0].texto === "A" && pcCartas[1].texto === "A") {
      userCartas = []
      pcCartas = []
      sorteioCartas()
   }
}

const somaPontos = () => {
   pontosUser = 0
   pontosPc = 0
   for (let i = 0; i < userCartas.length; i++) {
      pontosUser += userCartas[i].valor
   }
   for (let i = 0; i < pcCartas.length; i++) {
      pontosPc += pcCartas[i].valor
   }
}

const lerUserMao = () => {
   userMao = ""
   for (const i of userCartas) {
      userMao += i.texto + ""
   }
}

const lerPcMao = () => {
   pcMao = ""
   for (const i of pcCartas) {
      pcMao += i.texto + ""
   }
}

const novaRodada = () => {
   if (confirm(`Suas cartas são ${userMao}. \nA carta revelada do computador é ${pcCartas[0].texto}.\nDeseja comprar mais uma carta?.`)) {
      userCartas.push(comprarCarta())
      lerUserMao()
      somaPontos()
   } else {
      while (pontosPc < pontosUser) {
         pcCartas.push(comprarCarta())
         lerPcMao()
         somaPontos()
      }
      check = false
   }
}

const resultado = () => {
   let mensagem = ""
   if (pontosUser === pontosPc) {
      mensagem = "Empate"
   } else if (pontosPc > 21 || (pontosUser > pontosPc && pontosUser <= 21)) {
      mensagem = "Você venceu!"
   } else if (pontosUser > 21 || (pontosPc > pontosUser && pontosPc <= 21)) {
      mensagem = "O computador Venceu!"
   }
   alert(`Suas cartas são ${userMao}. Sua pontuação é ${pontosUser}.\nAs cartas do computador são ${pcMao}. A pontuação do computador é ${pontosPc}.\n${mensagem}`)
}

const startGame = () => {
   if (confirm("Boas vindas ao jogo de BlackJack!" + "\n\nDeseja iniciar um novo jogo?")) {
      sorteioCartas()
      verificaCarta()
      somaPontos()
      lerUserMao()
      lerPcMao()

      while (pontosUser < 21 && check === true) {
         novaRodada()
      }
      resultado()
   } else {
      alert("O jogo acabou!")
   }
}
startGame()