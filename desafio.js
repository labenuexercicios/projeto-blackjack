//Segunda parte do projeto , para finalizar , acredito que falta a parte do computador comprar cartas para tentar ganhar do usuário e exibir as cartas compradas e o valor do calculo no final , pensei na lógica , mais ou menos como foi feita para o usuário porem na sintaxe não funcionou , quebrei a cabeça mas não consegui terminar essa parte. 

function comecoDoJogo() {
    if (confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?") === true) {
        let cartasUsuario = [comprarCarta(), comprarCarta()]
        let cartasPc = [comprarCarta(),comprarCarta()]
        let calculoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
        let calculoPc = cartasPc[0].valor + cartasPc[1].valor
        let compra = confirm(`Cartas do Usuário - ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto} - ${calculoUsuario} \nCartas do Computador - ${cartasPc[0].texto}\nDeseja comprar mais cartas ?`)

    

        while (compra) {
            let novaCarta = comprarCarta();
            cartasUsuario.push(novaCarta);
            let resultadoUsuario = []

            calculoUsuario = 0;
            for (let carta of cartasUsuario) {
                resultadoUsuario.push(carta.texto);
                calculoUsuario += carta.valor
            }
            if (calculoUsuario > 21) {
                break;
            }
            compra = `Cartas do Usuário - ${resultadoUsuario.join(" e ")} - total: ${calculoUsuario}\nCartas do Computador - ${cartasPc[0].texto}\nDeseja comprar mais cartas?`;
            compra = confirm(compra);
        }

        if (calculoUsuario === 2 * 'A') {
            confirm('Fim de jogo')
            console.log('Fim de jogo')
        } else if (calculoUsuario > 21) {
            confirm('Computador ganhou , usuário estourou!')
            console.log('Computador ganhou , usuário estourou! ')
        } else if (calculoUsuario > calculoPc) {
            confirm('Usuário ganhou !')
            console.log('Usuário ganhou ! ')
        } else if (calculoUsuario < calculoPc) {
            confirm('Computador ganhou !')
            console.log('Computador ganhou ! ')
        } else if (calculoUsuario === calculoPc) {
            confirm('EMPATE')
            console.log('EMPATE')
        }
    }
    else {
        alert('O jogo acabou !')
        console.log('O jogo acabou ! ')
    }
}
comecoDoJogo()