
function BlackJack () {
iniciarRodada = confirm('Bem-vinde ao jogo de BlackJack! \nQuer iniciar uma nova rodada?');
    
if (iniciarRodada === true) {
  console.log("Ótimo, vamos começar!");
    
  let primeiraCartaUser = comprarCarta()
  let segundaCartaUser = comprarCarta()
  let cartasUser = [primeiraCartaUser.texto, segundaCartaUser.texto]
  let calculoUsuario = primeiraCartaUser.valor + segundaCartaUser.valor

  let primeiraCartaComputador = comprarCarta()
  let segundaCartaComputador = comprarCarta()
  let cartasComputador = [primeiraCartaComputador.texto, segundaCartaComputador.texto]
  let calculoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

  if ((primeiraCartaUser && segundaCartaUser === 'A') || (primeiraCartaComputador && segundaCartaComputador === 'A')) {
   
   primeiraCartaUser = sortearCarta();
   segundaCartaUser = sortearCarta();
   primeiraCartaComputador = sortearCarta();
   segundaCartaComputador = sortearCarta();
  }
       
for (i = 0; confirm(`Cartas do Usuário: ${cartasUser}. \nCarta do Computador: ${primeiraCartaComputador.texto}. \nDeseja comprar mais cartas ?`); i++) {

  let novaCarta = comprarCarta()
  let cartaTexto = novaCarta.texto
  cartasUser.push(cartaTexto)
  calculoUsuario += novaCarta.valor

  if(calculoUsuario > 21) {
    break
}
}

if(calculoUsuario <= 21) {
  for(i =0; calculoComputador <= calculoUsuario; i++) {
        
  let novaCarta = comprarCarta()
  let cartaTexto = novaCarta.texto
  cartasComputador.push(cartaTexto)
  calculoComputador += novaCarta.valor
        
  if (calculoComputador > 21) {
    break
}
}
}

if(calculoComputador > calculoUsuario && calculoComputador < 21 || calculoUsuario > 21){
   alert(`Suas cartas são: ${cartasUser} \nSua pontuação total é de: ${calculoUsuario} \nAs Cartas do computador são ${cartasComputador}, \nA pontuação total do computador é de: ${calculoComputador} \nO Computador ganhou a rodada!`)

}else if (calculoUsuario > calculoComputador || calculoComputador > 21){
   alert(`Suas Cartas são ${cartasUser} \nSua pontuação total é de: ${calculoUsuario} \nAs cartas do computador são: ${cartasComputador} \nA pontuação do computador é de: ${calculoComputador} \nO Usuário ganhou a rodada!`)

}else if (calculoComputador === calculoUsuario){
   alert(`Suas Cartas são ${cartasUser} \nSua pontuação total é de: ${calculoUsuario} \nAs cartas do computador são: ${cartasComputador} \nA pontuação do computador é de: ${calculoComputador} \nO jogo empatou!`) 

}else if (calculoComputador > 21 && calculoUsuario > 21) {
   alert(`Empate de perdedores`)
}
}else {
    alert(`O jogo foi cacelado pelo usuário!`);
}
}

BlackJack()