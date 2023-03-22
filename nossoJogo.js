console.log('Bem-vindo(a) ao jogo de blackjack');

const inicio = confirm('Quer iniciar uma nova rodada?');

if (inicio) {
    const primeiraCartaUser = comprarCarta();
    const segundaCartaUser = comprarCarta();
    const cartasUser = primeiraCartaUser.valor + segundaCartaUser.valor;

    const primeiraCartaPC = comprarCarta();
    const segundaCartaPC = comprarCarta();
    const cartaPC = primeiraCartaPC.valor + segundaCartaPC.valor;

    console.log(
        'Cartas Do Usuário:',
        primeiraCartaUser.texto,
        segundaCartaUser.texto,
        cartasUser
    );
    console.log(
        'Cartas Do Computador',
        primeiraCartaPC.texto,
        segundaCartaPC.texto,
        cartaPC
    );

    if (cartaPC > 21) {
        console.log('O computador estourou! O usuario ganhou!');
    } else if (cartasUser > 21) {
        console.log('O Usuário estourou! O Computador Ganhou!');
    } else if (cartaPC === cartasUser) {
        console.log('Empatou!');
    } else if (cartasUser > cartaPC) {
        console.log('O Usuário ganhou!');
    } else if (cartaPC > cartasUser) {
        console.log('O Computador Ganhou!');
    } else {
        console.log('O Jogo Acabou!');
    }
}
