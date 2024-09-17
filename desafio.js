
let userCard = [(purchaseCard()), (purchaseCard())]
let computerCard = [(purchaseCard()), (purchaseCard())]

let firstPlay = () => {
   let userCard = [(purchaseCard()), (purchaseCard())]
   let computerCard = [(purchaseCard()), (purchaseCard())]
   let confereCartas = true


   while (confereCartas === true) {
      if (userCard[0].valor === 11 && userCard[1].valor === 11 || computerCard[0].valor === 11 && computerCard[1].valor === 11) {
         console.log("Entrei no while")
         userCard = []
         computerCard = []
         userCard = [(purchaseCard()), (purchaseCard())]
         computerCard = [(purchaseCard()), (purchaseCard())]
      } else {
         console.log("Entrei while")
         confereCartas = false
      }
   }
}


let check = true

let userPoint = 0
let computerPoint = 0
let userCards
let ComputerCards

const calculatePoint = () => {
    userPoint = 0
    computerPoint = 0
   for (let i = 0; i < userCard.length; i++) {
    userPoint += userCard[i].valor
   }
   for (let i = 0; i < computerCard.length; i++) {
    computerPoint += computerCard[i].valor
   }
}


const maisCartas = () => {
   if (confirm(`Suas cartas são: ${userCards}\n Deseja mais uma carta?`)) {
    userCard.push(purchaseCard())
    userCards()
    calculatePoint()
   } else {
      while (computerPoint < userPoint) {
        computerCard.push(purchaseCard())
         readComputerCards()
         calculatePoint()
      }
      check = false
   }
}


const resultados = () => {
   let mensagem = ""
   if (userPoint === computerPoint) {
      mensagem = "Empatou!"
   } else if (computerPoint > 21 || (userPoint > computerPoint && userPoint <= 21)) {
      mensagem = "Você venceu!"
   } else if (userPoint > 21 || (computerPoint > userPoint && computerPoint <= 21)) {
      mensagem = "O computador venceu!"
   }

   alert(`Suas cartas são ${userCards}. Sua pontuação é ${userPoint}.\n As cartas do computador são ${computerCards}. A pontuação do computador é ${computerPoint}.\n${mensagem}`)
}
const serCards = () => {
    userCards = ""
   for (const iterator of userCard) {
    userCards += iterator.texto + ""
   }
}
const readUserCards = () => {
   computerCards = ""
   for (const iterator of computerCard) {
      maoComputador += iterator.texto + ""
   }
}
calculatePoint()


const BlackJack = () => {
   if (confirm("Estar pronto para jogar Black Jack")) {
    firstPlay()
    calculatePoint()
      readUserCards()
      readUserCards()
      while (userPoint < 21 && check === true) {
         maisCartas()
      }
      resultados()
   } else {
      alert("Fim do jogo!")
   }
}
BlackJack()

