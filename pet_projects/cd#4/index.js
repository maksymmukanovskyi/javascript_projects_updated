const billArr = [275, 40, 430];
function percentage(num, perc){
    return Math.round((num/100)*perc);
}

billArr.forEach(el => console.log(`The bill was ${el}$, the tip was ${el > 50 && el < 300? percentage(el, 15): percentage(el, 20)} and the total value ${el > 50 && el < 300? el + percentage(el, 15): el + percentage(el, 20)}`));
