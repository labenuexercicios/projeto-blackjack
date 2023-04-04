let user = [];
let computer = [];

function comecoDoJogo() {
    if (
        confirm(`Boas vindas ao jogo de BlackJack
Quer iniciar uma nova rodada?`) === true
    ) {
        let newCardUser1 = comprarCarta();
        let newCardUser2 = comprarCarta();

        let newCardComputer1 = comprarCarta();
        let newCardComputer2 = comprarCarta();

        let userChartCalculation = newCardUser1.valor + newCardUser2.valor;
        let computerChartCalculation =
            newCardComputer1.valor + newCardComputer2.valor;

        let frase =
            confirm(`Cartas do Usuário ${newCardUser1.texto} ${newCardUser2.texto} Soma das suas cartas: ${userChartCalculation}
Carta revelada do computador ${newCardComputer1.texto}
Deseja comprar mais carta?`);

        while (frase === true) {
            let NewCard = comprarCarta();
            userChartCalculation += NewCard.valor;

            if (userChartCalculation > 21) {
                frase = false;
            } else {
                frase =
                    confirm(`Cartas do Usuário ${newCardUser1.texto} ${newCardUser2.texto} Soma das suas cartas: ${userChartCalculation}
Carta Revelada do computador ${newCardComputer1.texto}
Deseja comprar mais carta?`);
            }

            if (userChartCalculation <= 21) {
                while (
                    computerChartCalculation < userChartCalculation &&
                    computerChartCalculation <= 21
                ) {
                    computer.push(comprarCarta());

                    for (let elemento of computer) {
                        computerChartCalculation += elemento.valor;
                    }
                }

                let fraseFinal = ``;
            } else if (
                computerChartCalculation > userChartCalculation &&
                computerChartCalculation <= 21
            ) {
                fraseFinal = `O Computador Ganhou!`;
            } else if (
                userChartCalculation > computerChartCalculation &&
                userChartCalculation <= 21
            ) {
                fraseFinal = `O Usuário Ganhou!`;
            } else if (computerChartCalculation > 21) {
                fraseFinal = `O Computador Estourou , O Usuário Ganhou!`;
            } else if (userChartCalculation > 21) {
                fraseFinal = `O Usuário Estourou , O Computador Ganhou!`;
            } else if (
                userChartCalculation > 21 &&
                computerChartCalculation > 21
            ) {
                fraseFinal = `Os Dois Estouraram!`;
            } else {
                fraseFinal = `Empatou!`;
            }

            alert(
                `Pontuação do Usuário : ${userChartCalculation}
Pontuação do Computador : ${computerChartCalculation}
` + fraseFinal
            );
        }
    } else {
        alert(`O jogo acabou!`);
    }
}

comecoDoJogo();
