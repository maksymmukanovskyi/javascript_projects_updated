'use strict';

const select = (el) => document.querySelector(`${el}`);

const strings = {
    playerOneScore: select('#score--0'),
    playerTwoScore: select('#score--1'),
    currentScorePlayerOne: select('#current--0'),
    currentScorePlayerTwo: select('#current--1'),
    dice: select('.dice'),
    btnNew: select('.btn--new'),
    btnRoll: select('.btn--roll'),
    btnHold: select('.btn--hold'),
};


const gameStore = {
playerOneScore: 0,
playerTwoScore: 0,
diceVisibility: '',
activePlayer: 0,
};

const resetStore = function(){
    gameStore.playerOneScore = 0;
    gameStore.playerTwoScore = 0;
    gameStore.diceVisibility = 'hidden';
}


const initGame = function(){
    resetStore();
    strings.playerOneScore.textContent = gameStore.playerOneScore; 
    strings.playerTwoScore.textContent = gameStore.playerTwoScore; 
    strings.dice.classList.add(`${gameStore.diceVisibility}`); 
}

strings.btnNew.addEventListener('click', onNewClick);
// strings.btnRoll.addEventListener('click', onRollClick);
// strings.btnHold.addEventListener('click', onHoldClick);

function onNewClick(e){
    initGame();
}
