
console.log('Bem-vindo ao blackjack! Boa sorte no jogo!')

let jogo = confirm('Vamos jogar uma nova rodada?')

if (jogo) {
    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Adversario = comprarCarta()
    let carta2Adversario = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoAdversario = carta1Adversario.valor + carta2Adversario.valor

    console.log(`Usuário: cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} = ${pontuacaoUsuario}`)
    console.log(`Adversário: cartas: ${carta1Adversario.texto} ${carta2Adversario.texto} = ${pontuacaoAdversario}`)

    if (pontuacaoUsuario > pontuacaoAdversario) {
        console.log('O usuário ganhou!')
    
    } else if (pontuacaoAdversario > pontuacaoUsuario) {
        console.log('O computador ganhou!')
    
    } else if (pontuacaoUsuario === pontuacaoAdversario) {
        console.log('Empate!')
    }

} else {
    console.log("O jogo acabou")
}

