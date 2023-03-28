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
   console.log("Boas vindas ao jogo de BlackJack !");
   let jogo = confirm("Boas vindas ao jogo de BlackJack !\nQuer iniciar uma nova rodada?");
   if (jogo) {
    let usuarioCartas = [];
    let computadorCartas = [];

    let textoCartasUsuario = "";
    let textoCartasComputador = "";

    let pontuacaoUsuario = 0;
    let pontuacaoComputador = 0;

    usuarioCartas.push(comprarCarta());
    usuarioCartas.push(comprarCarta());
    computadorCartas.push(comprarCarta());
    computadorCartas.push(comprarCarta());

    if (pontuacaoUsuario === 22 || pontuacaoComputador == 22) {
        confirm("Quer iniciar uma nova rodada?");
    }

    for (let i = 0; i < usuarioCartas.length; i++) {
        textoCartasUsuario += usuarioCartas[i].texto + " ";
        pontuacaoUsuario += usuarioCartas[i].valor;
    }

    for (let i = 0; i < computadorCartas.length; i++) {
        textoCartasComputador += computadorCartas[i].texto + " ";
        pontuacaoComputador += computadorCartas[i].valor;
    }

    console.log(`Usuário - cartas :${textoCartasUsuario} - Pontuação - ${pontuacaoUsuario} `);
    console.log(`Computador - cartas :${computadorCartas[0].texto} - Pontuação - ${computadorCartas[0].valor} `);

    let continuarJogo = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${computadorCartas[0].texto}.
    Deseja comprar mais uma carta?`);

    let continuar = true

    while (continuar) {
      if(pontuacaoUsuario >=21){

         break
      }

      if(continuarJogo === true){
         usuarioCartas.push(comprarCarta());
        computadorCartas.push(comprarCarta());
        
        pontuacaoUsuario = 0;
        textoCartasUsuario = "";

        pontuacaoComputador = 0;
        textoCartasComputador ="";

        for (let i = 0; i < usuarioCartas.length; i++) {
            textoCartasUsuario += usuarioCartas[i].texto + " ";
            pontuacaoUsuario += usuarioCartas[i].valor;
        }

        for (let i = 0; i < computadorCartas.length; i++) {
            textoCartasComputador += computadorCartas[i].texto + " ";
            pontuacaoComputador += computadorCartas[i].valor;
        }

      } else {

         continuar === false

      }    
        
        if (pontuacaoUsuario > 21) {
            console.log(`Usuário - cartas :${textoCartasUsuario} - Pontuação -${pontuacaoUsuario} `);
            console.log(`Computador - cartas :${textoCartasComputador} - Pontuação -${pontuacaoComputador} `);

            alert( `Suas cartas são ${textoCartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n . As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n . O computador ganhou!` );

            break

        } else if (pontuacaoComputador > 21) {
             alert( `Suas cartas são ${textoCartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n . As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n . O usuario ganhou!` );
            
            break

        } else if (pontuacaoUsuario == pontuacaoComputador) {
            alert( `Suas cartas são ${textoCartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n . As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.\n . O jogo terminou empatado!` );
            
            break 
        } else if (continuar === false) {
         alert("O jogo acabou");
         break;
         } 
      } 
      }
