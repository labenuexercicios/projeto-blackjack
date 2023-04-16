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
	console.log("Boas vindas ao jogo de BlackJack!")

	if(confirm('Quer iniciar uma nova rodada?')){

		//sorteio de cartas
		const carta1U = comprarCarta()
        const carta2U = comprarCarta()
        const carta1C = comprarCarta()
        const carta2C = comprarCarta()

		//valor das cartas
	
		let resultadoDoUsuario = carta1U.valor + carta2U.valor
        let resultadoDoComputador = carta1C.valor + carta2C.valor
		
		//array dos jogadores
		let arrayCartasU = [comprarCarta().texto, comprarCarta().texto]
	
		let arrayCartasC= [comprarCarta().texto, comprarCarta().texto]
		
		let i =confirm(`Suas cartas são ${arrayCartasU}. A carta revelada do computador é ${carta1C.texto}. Deseja comprar mais uma carta?`)
		

	    // laço das jogadas
		
		while (i===true){
			let novaCarta = comprarCarta()
			arrayCartasU.push(novaCarta.texto)
				
			

			let novaCartaC = comprarCarta()
			arrayCartasC.push(novaCartaC.texto)
			
				
			confirm(`Suas cartas são ${arrayCartasU}. A carta revelada do computador é ${arrayCartasC[0]}. Deseja comprar mais uma carta?`)
			
			
			if (resultadoDoUsuario || resultadoDoComputador >21) {
			  break
		}
		}
					
	   // resultado final 
	
		if (resultadoDoComputador > resultadoDoUsuario || resultadoDoUsuario > 21){
		alert
		(`Suas cartas são ${arrayCartasU}. Sua pontuação é ${resultadoDoUsuario}.
		As cartas do computador são ${arrayCartasC}. A pontuação do computador é ${resultadoDoComputador}.
		O computador ganhou!`) 
		

		} else if (resultadoDoUsuario > resultadoDoComputador|| resultadoDoComputador>21){
		alert
		(`Suas cartas são ${arrayCartasU}. Sua pontuação é ${resultadoDoUsuario}. 
		As cartas do computador são ${arrayCartasC}. A pontuação do computador é ${resultadoDoComputador}.
		Você ganhou!`) 
		

		} else {
		alert
		(`Suas cartas são ${arrayCartasU}. Sua pontuação é ${resultadoDoUsuario}. 
		As cartas do computador são ${arrayCartasC}. A pontuação do computador é ${resultadoDoComputador}.
		Empate!`) 
		}
		
	
	 } else {
		alert 
		(`O jogo acabou!`)
	} 
