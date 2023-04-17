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
    alert ("Boas Vindas ao Jogo de BlackJack")

    if (confirm('Quer iniciar uma nova rodada?')) {
    
      //sorteio de cartas
      const carta1U = comprarCarta()
      const carta2U = comprarCarta()
      const carta1C = comprarCarta()
      const carta2C = comprarCarta()
      
      // array dos jogadores 
      let arrayU = [carta1U, carta2U ]
    
      let arrayC = [carta1C, carta2C ]
    
      // Verificando se há duas carta com 11
    const Cartas11 = (cartasDoJogador, cartasDoComputador) => {
    
      return (cartasDoJogador[0].valor === 11 && cartasDoJogador[1].valor === 11) || (cartasDoComputador[0].valor === 11 && cartasDoComputador[1].valor === 11)
    }
    
    Cartas11(arrayU,arrayC)
    
      //valor da soma das cartas
    
      let somandoCartasUsuario = 0;
        for (let j of arrayU) {
          somandoCartasUsuario += j.valor;
        }
      
      let i = confirm(`Suas cartas são ${carta1U.texto} ${carta2U.texto} = ${somandoCartasUsuario}. A carta revelada do computador é ${carta1C.texto}. Deseja comprar mais uma carta?`)
    
    
      // laço das jogadas
    
      while (i) {
        // Nova carta do usuário 
        let  novaCartaU = comprarCarta()
        arrayU.push( novaCartaU)
    
        let arrayUTexto = "";
        for (let cartasBj of arrayU) {
        arrayUTexto += cartasBj.texto;
      }
    
        
         //Somando cartas usuário
    
         let somandoCartasUsuario = 0;
         for (let j of arrayU) {
           somandoCartasUsuario += j.valor;
         }
    
         let somandoCartaC = 0;
         for (let l of arrayC) {
           somandoCartaC += l.valor;
         }
         // Nova carta do computador
        if(somandoCartasUsuario <= 19){
        let novaCartaC = comprarCarta()
        arrayC.push(novaCartaC)
        }
                
        confirm(`Suas cartas são ${arrayUTexto} = ${somandoCartasUsuario}. A carta revelada do computador é ${carta1C.texto}. Deseja comprar mais uma carta?`)
       
        break;
                
      }

      //percorrendo array de texto cartas usuário

      let arrayUser = "";
      for (let cartaBjU of arrayU) {
        arrayUser += cartaBjU.texto;
      }
      let arrayComp = "";
      for (let cartaBjC of arrayC) {
        arrayComp += cartaBjC.texto;
      }
    
      //percorrendo array e somando  as cartas 
      
      let somandoU = 0;
      for (let j of arrayU) {
        somandoU += j.valor;
      }
      let somandoC = 0;
      for (let l of arrayC) {
        somandoC += l.valor;
      }
    
      // resultado final 
    
      if (somandoU > 21 && somandoC > 21) {
        alert(`Suas cartas são ${arrayUser}. Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}. A pontuação do computador é ${somandoC} \n Ninguem Ganhou`);
    
      } else if (somandoU === somandoC) {
        alert(`Suas cartas são ${arrayUser}. Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}. A pontuação do computador é ${somandoC} \n Empate`);
    
      } else if (somandoU <= 21 && somandoC > 21) {
        alert(`Suas cartas são ${arrayUser}. Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}. A pontuação do computador é ${somandoC} \n Você Ganhou!`);
    
      } else if (somandoU > somandoC && somandoU <= 21) {
        alert(`Suas cartas são ${arrayUser}. Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}. A pontuação do computador é ${somandoC} \n Você Ganhou!`);
    
      } else if (somandoC <= 21 && somandoC > somandoU) {
        alert(`Suas cartas são ${arrayUser}. Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}.A pontuação do computador é ${somandoC} \n O Computador Ganhou!`);
    
      } else if (somandoU > 21 && somandoC < 21) {
        alert(`Suas cartas são ${arrayUser}.  Sua pontuação é ${somandoU}.
        As cartas  do computador são ${arrayComp}. A pontuação do computador é ${somandoC} \n O Computador Ganhou!`);
      }
    
    
    } else {
      alert
        (`O jogo acabou!`)
    }

