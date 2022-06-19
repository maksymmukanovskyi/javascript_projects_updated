'use strict';

const select = (el) => document.querySelector(`${el}`);

const strings = {
    playerOneScore: select('#score--0'),
    playerTwoScore: select('#score--1'),
    0: select('#current--0'),
    1: select('#current--1'),
    dice: select('.dice'),
    btnNew: select('.btn--new'),
    btnRoll: select('.btn--roll'),
    btnHold: select('.btn--hold'),
    playerSectionOne: select('.player--0'),
    playerSectionTwo: select('.player--1'),
};


const gameStore = {
scores: [0, 0],
diceVisibility: '',
activePlayer: 0,
currentScore: 0,
};

const resetStore = function(){
    gameStore.playerOneScore = 0;
    gameStore.playerTwoScore = 0;
    gameStore.diceVisibility = 'hidden';
    gameStore.activePlayer = 0;
    gameStore.currentScore = 0;
}


const initGame = function(){
    resetStore();
    strings.playerOneScore.textContent = gameStore.playerOneScore; 
    strings.playerTwoScore.textContent = gameStore.playerTwoScore; 
    strings.dice.classList.add(`${gameStore.diceVisibility}`); 
    [strings[0], strings[1]].forEach(el => el.textContent = gameStore.currentScore)
}

strings.btnNew.addEventListener('click', onNewClick);
strings.btnRoll.addEventListener('click', onRollClick);
strings.btnHold.addEventListener('click', onHoldClick);

function onNewClick(){
    initGame();
};

function onRollClick(){
    //generate random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice roll
    strings.dice.classList.remove('hidden');
    strings.dice.src = `./img/dice-${dice}.png`;
    console.log(dice)

    //check for rolled 1
    if( dice !== 1){
    //add dice for curent score
        gameStore.currentScore += dice;
        strings[gameStore.activePlayer].textContent = gameStore.currentScore;
    }else{
    //switch to next player
        gameStore.currentScore = 0;
        strings[gameStore.activePlayer].textContent = gameStore.currentScore;
        gameStore.activePlayer = gameStore.activePlayer === 1 ? 0 : 1;
        [strings.playerSectionOne, strings.playerSectionTwo].forEach(el => el.classList.toggle('player--active'));
    }

};

function onHoldClick(){
    const activePlayer = gameStore.activePlayer === 0 ? 'playerOneScore' : 'playerTwoScore';
    const winnerSection = gameStore.activePlayer === 0 ? 'playerSectionOne' : 'playerSectionTwo';

    
    //add current score to total score
    gameStore.scores[gameStore.activePlayer] += gameStore.currentScore;
    gameStore.currentScore = 0;

    strings[activePlayer].textContent = gameStore.scores[gameStore.activePlayer];
    strings[gameStore.activePlayer].textContent = gameStore.currentScore;


    [strings.playerSectionOne, strings.playerSectionTwo].forEach(el => el.classList.toggle('player--active'));
    //if score  > 100 current player win game
    if(gameStore.scores[gameStore.activePlayer] >= 50){
        // alert(`Player${gameStore.activePlayer + 1} win the game`);
        strings[winnerSection].classList.remove('player--active');
        strings[winnerSection].classList.add('player--winner');

        initGame();
        strings[activePlayer].textContent = 'Winner!'

    }else{
    //if score  < 100 switch pllayer

        gameStore.activePlayer = gameStore.activePlayer === 1 ? 0 : 1;

    }

}