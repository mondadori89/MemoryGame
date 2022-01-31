// ---- Memory game v1.2 ---- 
// Código refatorado, mais cartas incluídas

// opções nas cartas
const arrBixos = ['horse', 'horse', 'dog', 'dog', 'cat', 'cat', 'pig', 'pig', 'rat', 'rat', 'sheep', 'sheep'];

//variável que vai mudar e que vai estar em cada elemento carta do html
let cardBixo = ['horse', 'horse', 'dog', 'dog', 'cat', 'cat', 'pig', 'pig', 'rat', 'rat', 'sheep', 'sheep'];
let isClicked = [false, false, false, false, false, false, false, false, false, false, false, false];

//lincando as divs (cartas) com variáveis
const card = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3'),
    document.getElementById('card4'),
    document.getElementById('card5'),
    document.getElementById('card6'),
    document.getElementById('card7'),
    document.getElementById('card8'),
    document.getElementById('card9'),
    document.getElementById('card10'),
    document.getElementById('card11'),
    document.getElementById('card12')
];

// Botão de start do jogo
const start = document.getElementById('startButton');


//função de iniciar jogo, mistura as cartas e desvira todas
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
    for (let i = 0; i < arrBixos.length; i++) {
        cardBixo[i] = arrBixos[cardsMixed[i]];
    }

    isClicked = [false, false, false, false, false, false, false, false];

    for (let i = 0; i < arrBixos.length; i++) {
        card[i].style.background = `url('images/card-back.png')`;
        card[i].style.backgroundSize = '100%';
        card[i].style.backgroundRepeat = 'no-repeat';
    }
}

// funçoes para virar cada carta
function flipCard(num) { 
    if (isClicked[num]) { 
        card[num].style.background = `url('images/card-back.png')`;
        card[num].style.backgroundSize = '100%';
        card[num].style.backgroundRepeat = 'no-repeat';
        isClicked[num] = false;
    }
    else {
        card[num].style.background = `url('images/card-${cardBixo[num]}.png')`;
        card[num].style.backgroundSize = '100%';
        card[num].style.backgroundRepeat = 'no-repeat';
        isClicked[num] = true; 
    }
}

//acionadores
start.onclick = mixCards;

card[0].addEventListener('click', flipCard.bind('click', 0));
card[1].addEventListener('click', flipCard.bind('click', 1));
card[2].addEventListener('click', flipCard.bind('click', 2));
card[3].addEventListener('click', flipCard.bind('click', 3));
card[4].addEventListener('click', flipCard.bind('click', 4));
card[5].addEventListener('click', flipCard.bind('click', 5));
card[6].addEventListener('click', flipCard.bind('click', 6));
card[7].addEventListener('click', flipCard.bind('click', 7));
card[8].addEventListener('click', flipCard.bind('click', 8));
card[9].addEventListener('click', flipCard.bind('click', 9));
card[10].addEventListener('click', flipCard.bind('click', 10));
card[11].addEventListener('click', flipCard.bind('click', 11));