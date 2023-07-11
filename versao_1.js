let jogo = confirm("Vamos começar ?")
let nomeJogador = prompt("Insira seu Nome")
console.log(nomeJogador)
while (nomeJogador.length === 0) {
    nomeJogador = prompt("Insira seu Nome")
};
// // CRIA NOME JOGADOR ATRAVEZ PROMPT
const jogador = document.querySelector(".jogador")
const ponto = document.createElement("h3")
const conteudoJ = document.createTextNode(` Jogador Um : ${nomeJogador}`)//cria nome
ponto.appendChild(conteudoJ)
jogador.insertAdjacentElement("beforeend", ponto)

function comprarCarta() {
    
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
   
    const numero = cartas[Math.floor(Math.random() * 13)]

    
    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

   
    if (numero === "A") {
        valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else { 
        valor = Number(numero)
    }

    
    const carta = {
        texto: numero + naipe,
        valor: valor
    }

    return carta
}

let carta1Jogador1;
let carta2Jogador1;
let carta1Jogador2;
let carta2Jogador2;
let carta3Jogador1;
let carta3Jogador2;

if (jogo) {
    // Comprar cartas ao iniciar jogo!
    carta1Jogador1 = comprarCarta()
    carta2Jogador1 = comprarCarta()
    carta1Jogador2 = comprarCarta()
    carta2Jogador2 = comprarCarta()

    // Regra ->  Se as duas cartas compradas forem dois AA entao faz a recompra novamente!
    if (carta1Jogador1.valor === 11 && carta2Jogador1.valor === 11 || carta1Jogador2.valor === 11 && carta2Jogador2.valor === 11) {
        carta1Jogador1 = comprarCarta()
        carta2Jogador1 = comprarCarta()
        carta1Jogador1 = comprarCarta()
        carta2Jogador2 = comprarCarta()
    }

    let jogador1;
    let jogador2;
    let empate;

    let pontosJogador1 = carta1Jogador1.valor + carta2Jogador1.valor;
    let pontosJogador2 = carta1Jogador2.valor + carta2Jogador2.valor;
    // verificação de pontos ao começar jogo!
    jogador2 = pontosJogador2 === 21 ? `Jogador Dois venceu ! ` : ""
    jogador1 = pontosJogador1 === 21 ? `Jogador Um venceu ! ` : ""
    jogador1 = pontosJogador2 > 21 ? `Jogador Um venceu ! ` : ""
    jogador2 = pontosJogador1 > 21 ? `Jogador Dois venceu ! ` : ""
    empate = pontosJogador1 >= 21 && pontosJogador2 >= 21 && pontosJogador1 === pontosJogador2 ? "Empate, vamos uma nova partida?" : ""
    if(pontosJogador1 === 21 || jogador2 === 21){
       Location.reload()
    } 
    // função para compra da terceira carta!
    function novacarta(event) {
        event.preventDefault()
        if (jogo) {
            if (pontosJogador1 < 21) {
                carta3Jogador1 = comprarCarta()
                
                if (pontosJogador1 < 21) {
                    carta3Jogador2 = comprarCarta()
                }
                let totalJ = pontosJogador1 += carta3Jogador1.valor;
                let totalC = pontosJogador2 += carta3Jogador2.valor;

                jogador2 = totalC=== 21 && totalJ <21 ? `Jogador Dois venceu ! ` : ""
                jogador1 = totalJ=== 21 && totalC<21 ? `Jogador Um venceu ! ` : ""
                jogador1 = totalC> 21 && totalJ < totalC? `Jogador Um venceu ! Jogador Dois estourou primeiro ` : ""
                jogador2 = totalJ> 21 && totalC < totalJ ? `Jogador Dois venceu ! Jogador UM estourou primeiro ` : ""
                empate = totalJ>= 21 && totalC>= 21 && totalJ=== totalC? "Empate, vamos uma nova partida?" : ""
                
                // atualização de pontos jogador
                const atualizarPontosJ = document.querySelector(".totalJ")
                atualizarPontosJ.innerHTML = `PONTOS : ${totalJ}`;
                const cartasJ = document.querySelector(".cartaJ")
                cartasJ.innerHTML = (` Cartas : ${carta1Jogador1.texto}, ${carta2Jogador1.texto},${carta3Jogador1.texto}`)
                const mostraVencedor = document.querySelector(".vencedor");
                const vencedor = document.createElement("h2");
                const pontoVencedor = document.createTextNode(` ${jogador1}${jogador2}${empate}`);
                vencedor.appendChild(pontoVencedor);
                vencedor.setAttribute("class", "vencedorTag");
                mostraVencedor.insertAdjacentElement("beforeend", vencedor);
 
                // Verificação, pontos e cartas do jogador 2 
                if (pontosJogador1 >= 21 || pontosJogador2 >= 21) {   
                    const pontuacaoC = document.querySelector(".totalC");
                    pontuacaoC.innerHTML = `PONTOS : ${totalC}`;
                    const cartaC = document.querySelector(".cartaPC");
                    cartaC.innerHTML = (` Cartas : ${carta1Jogador2.texto}, ${carta2Jogador2.texto},${carta3Jogador2.texto}`);

        
                    jogo = false //impede a compra de cartas
                }

            }


            return
        }
    }

    // função parar jogo
    function pararJogo(event) {
        event.preventDefault()

        if (jogo) {
          
            let totalC = pontosJogador2;

            jogador2 = pontosJogador2 > pontosJogador1 ? `Computador venceu ! ` : "";
            jogador1 = pontosJogador1 > pontosJogador2 ? `Jogador Um venceu ! ` : "";
            empate = pontosJogador1 === pontosJogador2 ? "Empate, vamos uma nova partida ?" : "";

            const mostraVencedor = document.querySelector(".vencedor");
            const vencedor = document.createElement("h2");
            const pontoVencedor = document.createTextNode(` ${jogador1}${jogador2}${empate}`);
            vencedor.appendChild(pontoVencedor);
            vencedor.setAttribute("class", "vencedorTag");
            mostraVencedor.insertAdjacentElement("beforeend", vencedor);

            //  Mostra cartas e pontuaçao do computador!
            const pontuacaoC = document.querySelector(".totalC");
            pontuacaoC.innerHTML = `Pontos : ${totalC}`;
            const cartaC = document.querySelector(".cartaPC");
            cartaC.innerHTML = ` Cartas : ${carta1Jogador2.texto}, ${carta2Jogador2.texto}`;

        }

        return jogo = false
    }

    //  Pontuação jogador1 
    const pontuacao = document.querySelector(".pontuacaoJ")
    const pontos = document.createElement("h3")
    const pontoJ = document.createTextNode(` Pontos : ${pontosJogador1}`)
    pontos.appendChild(pontoJ)
    pontos.setAttribute("class", "totalJ")
    pontuacao.insertAdjacentElement("beforeend", pontos)

    //  Pontuação jogador 2 
    const pontuacaoC = document.querySelector(".pontuacaoC")
    const pontosC = document.createElement("h3")
    const pontoC = document.createTextNode(`Pontos : ${carta1Jogador2.valor}`)
    pontosC.appendChild(pontoC)
    pontosC.setAttribute("class", "totalC")
    pontuacaoC.insertAdjacentElement("beforeend", pontosC)

    //  Carta Jogador 1
    const cartaJ = document.querySelector(".cartaJ")
    const cartasJ = document.createElement("h3")
    const cartaConteudo = document.createTextNode(` Cartas : ${carta1Jogador1.texto}, ${carta2Jogador1.texto} `)
    cartasJ.appendChild(cartaConteudo)
    cartaJ.insertAdjacentElement("beforeend", cartasJ)

    // Imprimi Carta Jogador Dois Computador
    const cartaC = document.querySelector(".cartaC")
    const cartasC = document.createElement("h3")
    const cartaConteudoC = document.createTextNode(` Cartas : ${carta1Jogador2.texto}`)
    cartasC.appendChild(cartaConteudoC)
    cartasC.setAttribute("class", "cartaPC")
    cartaC.insertAdjacentElement("beforeend", cartasC)





} else { alert("o jogo terminou!"), jogo = false }
// Reinicia o joga 
function reiniciar(event) {
    event.preventDefault()
    location.reload()
}
