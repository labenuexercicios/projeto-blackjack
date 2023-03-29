/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *  
 */
// fazendo novo commit e PR
    console.log(`Boas vindas ao jogo de BlackJack!`)

    const pergunta = confirm(`Quer iniciar uma nova rodada?`)

    const carta = comprarCarta()

    let jogoUser1 = comprarCarta()
    let jogoUser2 = comprarCarta()
    let jogoComputador1 = comprarCarta()
    let jogoComputador2 = comprarCarta()

      let calc21User = jogoUser1.valor + jogoUser2.valor
      let calc21Computador = jogoComputador1.valor + jogoComputador2.valor

    if(pergunta === true){

      
      console.log(`Usuário - cartas: ${jogoUser1.texto}${jogoUser2.texto} - pontuação ${calc21User}`)
      console.log(`Computador - cartas: ${jogoComputador1.texto}${jogoComputador2.texto} - pontuação ${calc21Computador}`)

      if(calc21User < calc21Computador){ 
         console.log(`O computador ganhooou! Tente outra vez :D`)
      }else if(calc21User > calc21Computador){
         console.log(`O usuário ganhooou! Congraaaats`)
      }else if(calc21Computador === calc21User){
         console.log(`Empaaaate!`)
      }

    }else{
      console.log(`O jogo acabou.`)
    }