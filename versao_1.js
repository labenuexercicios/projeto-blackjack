console.log("Boas vindas ao jogo de BlackJack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["♥️", "♣️", "♦️", "♠️"];

  function randomCard() {
    const indexNumbers = Math.floor(numbers.length * Math.random());
    const indexSuits = Math.floor(suits.length * Math.random());
    const randomNumbers = numbers[indexNumbers];
    const randomSuits = suits[indexSuits];
    const card = `${randomNumbers}${randomSuits}`;

    let cardValue;
    if (randomNumbers === "A") {
      cardValue = 11;
    } else if (
      randomNumbers === "J" ||
      randomNumbers === "Q" ||
      randomNumbers === "K"
    ) {
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

  const userSum = cardValue1 + cardValue2;
  const pcSum = cardValue3 + cardValue4;

  const user = `${card1.card} ${card2.card} - ${userSum}`;
  const pc = `${card3.card} ${card4.card} - ${pcSum}`;

  console.log(`Usuário - cartas: ${user}`);
  console.log(`Computador - cartas: ${pc}`);

  if (pcSum > userSum) {
    console.log("O computador ganhou!");
  } else if (pcSum < userSum) {
    console.log("O Usuário ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  console.log("O jogo acabou");
}
