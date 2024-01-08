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

    alert `Bem-Vindo ao Blackjack !`

    const usuario = []
    const pc = []
    
    if(confirm("Quer iniciar uma nova rodada?")){
    
    let inicio = false
    
    // Cartas iniciais
    while (inicio !== true){
    
    //Minhas cartas
    usuario.push(comprarCarta())
    usuario.push(comprarCarta())
    
    //Cartas do pc
    pc.push(comprarCarta())
    pc.push(comprarCarta())
          
    if ((usuario[0].valor == 10 && usuario[1].valor == 10) || (pc[0].valor == 10 && pc[1].valor == 10)) {
          
       }else { inicio = true } 
    
    }
    
    let maisCarta = true
    
    //Compras de cartas do usuário
    
    while(maisCarta){
       
    let frase1 = ""
    let ponto = 0
             
    for(let carta of usuario){
       frase1 += carta.texto + ""
       ponto += carta.valor
    }
    
    let comprasDeCartas
    
    if(ponto > 21){
       maisCarta = false
    
       } else {comprasDeCartas = confirm(`Suas cartas são ${frase1}.\nCarta revelada do pc é ${pc[0].texto}.\nDeseja comprar mais uma carta?`)
          
          if (comprasDeCartas){
             usuario.push(comprarCarta())
             
             } else {maisCarta = false}
       }
    }
    
    // Compra de cartas do pc
    
    let pontosDoUsuario = 0
    let pontosDoPc = 0
    
    let frase2 = ""
    let frase3 = ""
    
    
    if (pontosDoUsuario <= 21){
    
    while (pontosDoPc < pontosDoUsuario && pontosDoPc <= 21){
       pc.push(comprarCarta())
       
          pontosDoPc = 0
          frase3 = ""
    
    for (let carta of pc){
       pontosDoPc += carta.valor
       frase3 += carta.texto + " "
          
          }
       }
    }
    
    // Soma dos pontos
      
    for (let carta of pc){
       pontosDoPc += carta.valor
       frase3 += carta.texto + " "
    }
    for (let carta of usuario){
       pontosDoUsuario += carta.valor
       frase2 += carta.texto + " "
    }
    
    // Total de pontos 
       
    let total = ""
       
    if (pontosDoUsuario > pontosDoPc && pontosDoUsuario <= 21){
       total = "O usuário ganhou!"
       
       } else if (pontosDoPc > pontosDoUsuario && pontosDoPc <= 21){
          total = "O computador ganhou!"
       
       } else if (pontosDoPc > 21 && pontosDoUsuario <= 21){
       total = "O usuário ganhou!"
       
       } else if (pontosDoUsuario > 21 && pontosDoPc <= 21){
       total = "O computador ganhou!"
    
    } else {
       total = "Empate!"
    }
    
    alert(`Usuario - Cartas: ${frase2} - Pontuação: ${pontosDoUsuario} \n Computador - Cartas: ${frase3} - Pontuação: ${pontosDoPc} \n ${total}.`)
       
    } else { alert("O jogo acabou.") }