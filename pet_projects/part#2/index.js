/*
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
//challenge_1
/*const dolphins_1 = [44, 23 ,71];
const dolphins_2 = [85, 54 , 41];
const koalas_1 = [65, 54 , 49];
const koalas_2 = [23, 34 , 27];
const calcAverage = arr => arr.reduce((acc, el)=> acc + el ,0 )/arr.length;
const checkWinner = ([team_d, team_k]) => team_d >= 2*team_k? console.log(`Dolphins win (${team_d} vs. ${team_k})`) : console.log(`Koalas win (${team_k} vs. ${team_d})`)

const data1 =  [dolphins_1, koalas_1].map(el => calcAverage(el));

const data2 =  [dolphins_2, koalas_2].map(el => calcAverage(el));
console.log(data1);
checkWinner(data1);
console.log(data2);
checkWinner(data2);
*/

//challenge_2

const billArr = [125, 555,  44];

const calcTip = function(billVal){
    const getPercentage = (num, perc) => Math.round((num/100)*perc);
    return billVal > 50 && billVal < 300? getPercentage(billVal, 15): getPercentage(billVal, 20)
};

const tips = billArr.reduce((acc, el) => acc.concat(calcTip(el)) ,[]);

const total = billArr.map((el, idx) => el + tips[idx]);

console.log(billArr);
console.log(tips);
console.log(total);




