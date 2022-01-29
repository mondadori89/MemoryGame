// ---- Memory game v1 ---- 
// Jogo funcionando, precisa refatorar código

// opções nas cartas
const arrBixos = ['horse', 'horse', 'dog', 'dog', 'cat', 'cat', 'pig', 'pig'];

let card1Bixo = '';
let card2Bixo = '';
let card3Bixo = '';
let card4Bixo = '';
let card5Bixo = '';
let card6Bixo = '';
let card7Bixo = '';
let card8Bixo = '';

//Cria um array com números para lincar com o array dos bixos
function mixCards() {
    let cardsMixed = [];
    for (let i = 0; i < arrBixos.length; i++) {
        let randNum = Math.floor(Math.random() * arrBixos.length);
        if (cardsMixed.indexOf(randNum) === -1) {
            cardsMixed.push(randNum);
        } else {
            i--;
        }
    }
    card1Bixo = arrBixos[cardsMixed[0]];
    card2Bixo = arrBixos[cardsMixed[1]];
    card3Bixo = arrBixos[cardsMixed[2]];
    card4Bixo = arrBixos[cardsMixed[3]];
    card5Bixo = arrBixos[cardsMixed[4]];
    card6Bixo = arrBixos[cardsMixed[5]];
    card7Bixo = arrBixos[cardsMixed[6]];
    card8Bixo = arrBixos[cardsMixed[7]];

    card1.style.background = `url('images/card-back.png')`;
    card2.style.background = `url('images/card-back.png')`;
    card3.style.background = `url('images/card-back.png')`;
    card4.style.background = `url('images/card-back.png')`;
    card5.style.background = `url('images/card-back.png')`;
    card6.style.background = `url('images/card-back.png')`;
    card7.style.background = `url('images/card-back.png')`;
    card8.style.background = `url('images/card-back.png')`;
    card1.style.backgroundSize = '100%';
    card2.style.backgroundSize = '100%';
    card3.style.backgroundSize = '100%';
    card4.style.backgroundSize = '100%';
    card5.style.backgroundSize = '100%';
    card6.style.backgroundSize = '100%';
    card7.style.backgroundSize = '100%';
    card8.style.backgroundSize = '100%';

    //console.log(card1Bixo);
    //console.log(card2Bixo);
}

let start = document.getElementById('startButton');
start.onclick = mixCards;


//lincando as divs (cartas) com variáveis
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');

// funçoes para virar cada carta... com certeza tem um jeito melhor de fazer
let isClicked1 = '';
function flipCard1() { 
    if (isClicked1) { 
        card1.style.background = `url('images/card-back.png')`;
        card1.style.backgroundSize = '100%';
        isClicked1 = false;
    }
    else {
        card1.style.background = `url('images/card-${card1Bixo}.png')`;
        card1.style.backgroundSize = '100%';
        isClicked1 = true; 
    }
}

let isClicked2 = '';
function flipCard2() { 
    if (isClicked2) { 
        card2.style.background = `url('images/card-back.png')`;
        card2.style.backgroundSize = '100%';
        isClicked2 = false;
    }
    else {
        card2.style.background = `url('images/card-${card2Bixo}.png')`;
        card2.style.backgroundSize = '100%';
        isClicked2 = true; 
    }
}

let isClicked3 = '';
function flipCard3() { 
    if (isClicked3) { 
        card3.style.background = `url('images/card-back.png')`;
        card3.style.backgroundSize = '100%';
        isClicked3 = false;
    }
    else {
        card3.style.background = `url('images/card-${card3Bixo}.png')`;
        card3.style.backgroundSize = '100%';
        isClicked3 = true; 
    }
}

let isClicked4 = '';
function flipCard4() { 
    if (isClicked4) { 
        card4.style.background = `url('images/card-back.png')`;
        card4.style.backgroundSize = '100%';
        isClicked4 = false;
    }
    else {
        card4.style.background = `url('images/card-${card4Bixo}.png')`;
        card4.style.backgroundSize = '100%';
        isClicked4 = true; 
    }
}

let isClicked5 = '';
function flipCard5() { 
    if (isClicked5) { 
        card5.style.background = `url('images/card-back.png')`;
        card5.style.backgroundSize = '100%';
        isClicked5 = false;
    }
    else {
        card5.style.background = `url('images/card-${card5Bixo}.png')`;
        card5.style.backgroundSize = '100%';
        isClicked5 = true; 
    }
}

let isClicked6 = '';
function flipCard6() { 
    if (isClicked6) { 
        card6.style.background = `url('images/card-back.png')`;
        card6.style.backgroundSize = '100%';
        isClicked6 = false;
    }
    else {
        card6.style.background = `url('images/card-${card6Bixo}.png')`;
        card6.style.backgroundSize = '100%';
        isClicked6 = true; 
    }
}

let isClicked7 = '';
function flipCard7() { 
    if (isClicked7) { 
        card7.style.background = `url('images/card-back.png')`;
        card7.style.backgroundSize = '100%';
        isClicked7 = false;
    }
    else {
        card7.style.background = `url('images/card-${card7Bixo}.png')`;
        card7.style.backgroundSize = '100%';
        isClicked7 = true; 
    }
}

let isClicked8 = '';
function flipCard8() { 
    if (isClicked8) { 
        card8.style.background = `url('images/card-back.png')`;
        card8.style.backgroundSize = '100%';
        isClicked8 = false;
    }
    else {
        card8.style.background = `url('images/card-${card8Bixo}.png')`;
        card8.style.backgroundSize = '100%';
        isClicked8 = true; 
    }
}

//acionadores do clique das cartas
card1.addEventListener('click', flipCard1);
card2.addEventListener('click', flipCard2);
card3.addEventListener('click', flipCard3);
card4.addEventListener('click', flipCard4);
card5.addEventListener('click', flipCard5);
card6.addEventListener('click', flipCard6);
card7.addEventListener('click', flipCard7);
card8.addEventListener('click', flipCard8);
