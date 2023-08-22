if (
  confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?")
) {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["♥️", "♣️", "♦️", "♠️"];

  let userSum = 0;
  let pcSum = 0;
  let user = "";
  let pc = "";

  function randomCard() {
    const indexNumbers = Math.floor(numbers.length * Math.random());
    const indexSuits = Math.floor(suits.length * Math.random());
    const randomNumbers = numbers[indexNumbers];
    const randomSuits = suits[indexSuits];
    const card = `${randomNumbers}${randomSuits}`;

    let cardValue;
    if (randomNumbers === "A") {
      cardValue = userSum + 11 <= 21 ? 11 : 1;
    } else if (["J", "Q", "K"].includes(randomNumbers)) {
      cardValue = 10;
    } else {
      cardValue = randomNumbers;
    }

    return { card, cardValue };
  }

  const card1 = randomCard();
  const card2 = randomCard();
  const card3 = randomCard();
  const card4 = randomCard();

  const cardValue1 = card1.cardValue;
  const cardValue2 = card2.cardValue;
  const cardValue3 = card3.cardValue;
  const cardValue4 = card4.cardValue;

  userSum = cardValue1 + cardValue2;
  pcSum = cardValue3 + cardValue4;

  user = `${card1.card} ${card2.card}`;
  pc = `${card3.card} ${card4.card}`;

  function blackJack() {
    let newCard;
    let newCardValue;

    while (
      userSum < 21 &&
      confirm(
        `Suas cartas são ${user} - ${userSum}.\nDeseja comprar mais uma carta? `
      )
    ) {
      newCard = randomCard();
      newCardValue = newCard.cardValue;
      userSum += newCardValue;
      user += ` ${newCard.card}`;
    }

    while (pcSum <= 18 && pcSum < userSum) {
      newCard = randomCard();
      newCardValue = newCard.cardValue;
      pcSum += newCardValue;
      pc += ` ${newCard.card}`;
    }

    if (userSum === 21) {
      confirm(`Ganhou!`);
    } else if (userSum > 21) {
      confirm(`Perdeu!\nSuas cartas são ${user} - ${userSum}.\n`);
    } else if (pcSum > 21 || pcSum < userSum) {
      confirm(
        `Você ganhou!\nSuas cartas são ${user} - ${userSum}.\nAs cartas do computador são ${pc} - ${pcSum}`
      );
    } else if (pcSum > userSum && pcSum < 21) {
      confirm(`O computador ganhou!\nCartas do computador: ${pc} - ${pcSum}.`);
    } else if (pcSum === userSum) {
      confirm(
        `Empate!\nSuas cartas são ${user} - ${userSum}.\nAs cartas do computador são ${pc} - ${pcSum}`
      );
    }
  }
  blackJack();
} else {
  confirm("O jogo acabou");
}
