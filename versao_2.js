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
    

    const rodada = confirm("Bem-vindes ao jogo de BlackJack! \n Quer iniciar uma nova rodade?");
    if (!rodada) {
      alert("O jogo acabou");
    } else {;
    
      let usuario1 = "Usuario 1";
      let carta1 = comprarCarta();
      let carta2 = comprarCarta();
      let usuario2 = "CPU";
      let carta3 = comprarCarta();
      let carta4 = comprarCarta();
    
      let cartasUsuario1 = [carta1, carta2];
      let cartasUsuario2 = [carta3, carta4];
    
      while (true) {
        alert(
          `Suas cartas são : ${carta1.texto} ${carta2.texto} - pontuação = ${calcularPontos(cartasUsuario1)} \n Cartas do ${usuario2} são: ${carta3.texto} \n Deseja comprar outra carta?` 
        );
        let comprarMais = confirm("Deseja comprar outra carta?");
        if (!comprarMais || calcularPontos(cartasUsuario1) > 21);
        
        (calcularPontos(cartasUsuario2) >= 21 || calcularPontos(cartasUsuario2) > 21); {
          break;
          
        }
    
        
        
      }
    
    
      // confirm(`Pontuação do ${usuario1}: ${calcularPontos(cartasUsuario1)}`);
      // confirm(`Pontuação do ${usuario2}: ${calcularPontos(cartasUsuario2)}`);
    
      if (calcularPontos(cartasUsuario1) > 21) {
        alert(`O ${usuario2} venceu!!!`);
      } else if (calcularPontos(cartasUsuario2) > 21) {
        alert(`O ${usuario1} venceu!!!`);
      } else if (calcularPontos(cartasUsuario1) === calcularPontos(cartasUsuario2)) {
        alert("Empate");
      } else if (calcularPontos(cartasUsuario2) === 21) {
        alert(`O ${usuario2} venceu!!!`);
      } else if (calcularPontos(cartasUsuario1) === 21) {
        alert(`O ${usuario1} venceu!!!`);
      } else if (calcularPontos(cartasUsuario1) > calcularPontos(cartasUsuario2)) {
        alert(`O ${usuario1} venceu!!!`);
      } else {
        alert(`O ${usuario2} venceu!!!`);
      }
      alert("FIM DE JOGO");
    }
    
    function calcularPontos(cartas) {
      let pontuacao = 0;
      let possuiAs = false;
    
      for (let carta of cartas) {
        if (carta.valor === 11) {
          possuiAs = true;
          pontuacao += 11;
        } else if (carta.valor >= 21 && carta.valor <= 21) {
          pontuacao += 21;
        } else {
          pontuacao += carta.valor;
        }
      }
    
      if (possuiAs && pontuacao > 21) {
        pontuacao -= 21;
      }
    
      return pontuacao;
    }