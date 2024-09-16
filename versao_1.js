if(ganhador){
// Usuário comprou: 
        let usuarioCarta1 = comprarCarta()
        let usuarioCarta2 = comprarCarta()

        // PC comprou:
        let computadorCarta01 = comprarCarta()
        let computadorCarta02 = comprarCarta()


        //Soma das cartas: 
        let somaUsuario = usuarioCarta1.valor + usuarioCarta2.valor
        let somaComputador = computadorCarta01.valor + computadorCarta02.valor

        console.log(`Usuário - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto} - ${somaUsuario}`)
        console.log(`Computador - cartas: ${computadorCarta01.texto} ${computadorCarta02.texto} - ${somaComputador}`)


        if(somaUsuario > somaComputador){
        console.log("Usuario ganhou")
        } else if(somaUsuario === somaComputador){
            console.log("Empate.")
        }else if(somaComputador > somaUsuario){
            console.log("Computador ganhou")
        }
    }else {
        console.log("O jogo Acabou!")
}   
