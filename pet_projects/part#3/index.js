// Coding Challenge #1

/*const temperatures = [17, 21, 23].concat([12, 5, -5, 0, 4]);
console.log(temperatures);
const displayMessage = idx => idx > 1? `ºC in ${idx} days`: `ºC in ${idx} day`;
temperatures.forEach((el, idx) => console.log(`${el}${displayMessage(idx+1)}`));
*/

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
const selector = el => document.querySelector(el);

const domStrings = {
message: selector('.message'),
number: selector('.number'),
score: selector('.score'),
guess: selector('.guess'),
checkBtn: selector('.check'),
body: selector('body'),
again: selector('.again'),
};

const store = {
    score: 20,
    secretNum: Math.trunc(Math.random()*20)-1,
    message : '',
    number: '',
    guess: '',
    backgroundColor: '',
    widthNumber: '',
}

function storeReset(){
        store.score = 20;
        store.secretNum = Math.trunc(Math.random()*20)-1;
        store.message  = 'Start guessing...';
        store.number = '?';
        store.guess = '';
        store.backgroundColor = '#222';
        store.widthNumber = '15rem';
};


domStrings.checkBtn.addEventListener('click', clickOnCheck);
domStrings.again.addEventListener('click', clickOnAgain);

function clickOnAgain (){
    storeReset();
    messageUpdate(store.message);
    numberUpdate(store.number);
    domStrings.score.textContent = store.score;
    domStrings.guess.value = store.guess;
    domStrings.body.style.backgroundColor = store.backgroundColor;

    console.log(store)
}

function messageUpdate(message){
    store.message = message;
    domStrings.message.textContent = store.message;
}

function numberUpdate(number, style = store.widthNumber){
    store.number = number;
    domStrings.number.textContent = store.number;
    domStrings.number.style.width = style;

}

function scoreUpdate(){
    store.score--;
    domStrings.score.textContent = store.score;
}





function clickOnCheck(e){
    store.guess = +domStrings.guess.value;


    if(!store.guess){
        messageUpdate('No number!');
    }else if(store.guess === store.secretNum){
        numberUpdate(store.secretNum, '30rem');
        messageUpdate('Correct Number');
        domStrings.body.style.backgroundColor = '#60b347';

    }else if(store.guess > store.secretNum){
        if(store.score > 1){
            messageUpdate('Too High(');
            scoreUpdate()
    }else{
        messageUpdate('You loose');
    }
    }else if(store.guess < store.secretNum){
        if(store.score > 1){
            messageUpdate('Too Low(');
            scoreUpdate()

    }else{
        messageUpdate('You loose');
        }
    }
}



console.log(store);
