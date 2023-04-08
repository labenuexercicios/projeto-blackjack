console.log("Boas vindas ao jogo de BlackJack!")
const querJogar = confirm("Quer iniciar uma nova rodada?")
let cartasUsu = []
let cartasComp = []
let valorComp = 0
let valorUsu = 0
let textoUsu = ""
let textoComp = ""

if (querJogar !== false) {
    for (i = 0; i <= 1; i++) {
        cartasComp.push(comprarCarta())
        valorComp += cartasComp[i].valor
        textoComp += " "+cartasComp[i].texto
    }
    for (j = 0; j <= 1; j++) {
        cartasUsu.push(comprarCarta());
        valorUsu += cartasUsu[j].valor
        textoUsu += " "+cartasUsu[j].texto
    }

    if (valorUsu > valorComp && valorUsu <= 21) {
        vencedor = "Você ganhou! Parabéns!"
    } else if (valorUsu < valorComp && valorComp <= 21) {
        vencedor = "O computador ganhou!"
    } else if (valorComp > 21 && valorUsu <= 21) {
        vencedor = "Você ganhou! Parabéns!"
    } else if (valorUsu > 21 && valorComp <= 21) {
        vencedor = "O computador ganhou!"
    } else {
        vencedor = "Usuario e computador empataram!"
    }
}
console.log(`Suas cartas são: ${textoUsu}. Pontuação: ${valorUsu} pontos. 
Cartas do computador: ${textoComp}. Pontuação: ${valorComp} pontos.
${vencedor}`)
console.log(`Fim do jogo! Obrigado e volte sempre!`)