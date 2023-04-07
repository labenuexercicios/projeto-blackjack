/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  ## Lista de requisitos


   //  - [X] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programa
       
   //  - [X] O usuário deve ser questionado se deseja iniciar uma nova rodada	
    
   //  - [X] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo	
    
   //  - [X] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador
    
   //  - [X] Ao final do jogo, o programa deve imprimir o resultado informando quem ganhou	
    
   //  - [ ] Implementou a verificação para impedir um par de A na primeira mão	
    
   //  - [ ] O jogo esconde uma das cartas do computador ao início da rodada	
    
   //  - [ ] O usuário é questionado se deseja comprar mais cartas	
    
   //  - [ ] Se o usuário somar mais de 21, o mesmo perde automaticamente	
    
   //  - [ ] Se o computador somar mais de 21, o mesmo perde automaticamente    


alert('Olá! Seja bem vindo ao nosso Black Jack! Sinta-se a vontade para jogar o quanto quiser.')

let jogarNovamente = true

while(jogarNovamente === true) {

   const iniciarNovoJogo = confirm('Você gostaria de começar uma nova rodada?')

   if (iniciarNovoJogo === true) {

      let carta1Usuario = comprarCarta()
      let carta2Usuario = comprarCarta()
      let carta1Computador = comprarCarta()
      let carta2Computador = comprarCarta()
  
      if(carta1Usuario.texto === 'A' && carta2Usuario.texto === 'A' ){
         do { 
         carta1Usuario = comprarCarta()
         carta2Usuario = comprarCarta()
         }while (carta1Usuario.texto === 'A' && carta2Usuario.texto === 'A' ) 
      }

      if(carta1Computador.texto === 'A' && carta2Computador.texto === 'A' ){
         do { 
         carta1Computador = comprarCarta()
         carta2Computador = comprarCarta()
         }while (carta1Computador.texto === 'A' && carta2Computador.texto === 'A' )  
      }

      let valorUsuario = carta1Usuario.valor + carta2Usuario.valor
      let valorPC = carta1Computador.valor + carta2Computador.valor

      let cartasDoUsuario = (`Suas cartas são ${carta1Usuario.texto}/${carta2Usuario.texto}\n`)
      let pontuacaoUsuario = `A sua pontuação é ${valorUsuario}\n`
      let cartasPC = (`A carta revelada do computador é ${carta1Computador.texto}\n`)
      const comprarMais = ('Você quer comprar mais cartas?')

      let perguntaMaisCarta = confirm(cartasDoUsuario + pontuacaoUsuario + cartasPC + comprarMais)

      const novaCarta = comprarCarta()

   


      if (perguntaMaisCarta === false) {
         alert(`As suas cartas são ${carta1Usuario.texto} e ${carta2Usuario.texto} (${valorUsuario} pontos)\nAs cartas do Computador são ${carta1Computador.texto}/${carta2Computador.texto} (${valorPC} pontos)`)
         while (valorUsuario > valorPC && valorPC < 21) {
            novaCarta 
            valorPC = valorPC + novaCarta.valor
            alert(`As suas cartas são ${carta1Usuario.texto} e ${carta2Usuario.texto} (${valorUsuario} pontos)\nAs cartas do Computador são ${carta1Computador.texto}/${carta2Computador.texto}/${novaCarta.texto} (${valorPC} pontos)`)  
         }
         if(valorPC > valorUsuario && valorPC <= 21){
            alert(`Sua pontuação: ${valorUsuario}\nPontuação do Computador: ${valorPC}\nO Computador venceu!`)
            jogarNovamente = confirm('Você perdeu! Gostaria de jogar novamente?')
         } else if (valorPC > 21) {
            alert(`Sua pontuação: ${valorUsuario}\nPontuação do Computador: ${valorPC}\nVocê venceu!`)
            jogarNovamente = confirm('Você ganhou! Gostaria de jogar novamente?')
         } else{
            jogarNovamente = confirm('Empate! Gostaria de jogar novamente?')
         }
      }


      while (perguntaMaisCarta === true && valorUsuario < 21) { 
         novaCarta
         valorUsuario = valorUsuario + novaCarta.valor
         cartasDoUsuario += `/${novaCarta.texto}`
         let mensagem = `Suas cartas são ${cartasDoUsuario}\n`
         mensagem += `A sua pontuação é ${valorUsuario}\n`
         if (valorUsuario > 21) {
            mensagem += `A sua pontuação é ${valorUsuario}.\nO computador ganhou!`
            alert(mensagem)
            jogarNovamente = confirm('Você perdeu! Gostaria de jogar novamente?')
            break
         } 
         else {
            perguntaMaisCarta = confirm(mensagem + cartasPC + comprarMais)
         }
      }
      if (valorUsuario <= 21 && perguntaMaisCarta === false) {
         while (valorPC < valorUsuario && valorPC < 21){   
            novaCarta
            valorPC = valorPC + novaCarta.valor
            cartasPC += `/${novaCarta.texto}`
            let mensagem = `As suas cartas são ${cartasDoUsuario} (${valorUsuario} pontos)\n`
            mensagem += `As cartas do Computador são ${cartasPC} ` + `${novaCarta.texto}` + `(${valorPC} pontos)\n`
            if (valorPC > 21) {
               mensagem += `A pontuação do Computador ultrapassou 21. Você ganhou!`
               alert(mensagem)
               jogarNovamente = confirm('Você ganhou! Gostaria de jogar novamente?')
               break
            }
            else if (valorPC > valorUsuario && valorPC < 21) {
               mensagem += `Sua pontuação: ${valorUsuario}\nPontuação Computador = ${valorPC}`
               alert(mensagem)
               jogarNovamente = confirm('Você perdeu! Gostaria de jogar novamente?')
               break
            }
            else {
               alert(mensagem)
            }
         }
      }
   }
}   