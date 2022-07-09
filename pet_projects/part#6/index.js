const nested = [5,7,[9,10]];

const [five, ,[nine, ten]] = nested;
console.log(five, nine, ten);

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  const [players_1, players_2] = game.players;
  const [gk, ...fieldPlayers] = players_1;
  console.log(fieldPlayers);
  const allPlayers = [...players_1, ...players_2];
  console.log(allPlayers);
  const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Periscic'];
  console.log(players1Final);

  const {
    odds: {team1, x: draw, team2}
} = game;


  const printNmaes = function(...names){
    console.log(names);
    // console.log(names.length);
  };
  printNmaes(...game.scored);
  let biggest = game.odds.team1;

  for (let x in game.odds) {
    game.odds[x] <  biggest &&  (biggest = game.odds[x]);

  };
  
  
 for (let x in game.odds) {
    game.odds[x] <  biggest &&  (biggest = game.odds[x]);

  };

  function calcAverage({odds}){
let average = 0;

    for (let x in odds) {
        average += odds[x];
      };
      console.log(average)
      let result = Math.trunc(average/Object.keys(odds).length);
      console.log(result);

  };

  calcAverage(game);

  function printOdds(game){

    console.log(Object.keys(game));
    for (let x in game.odds) {
        console.log(`Odd of ${game[x]? game[x]: 'draw'}:${game.odds[x]}`)
      };
  }


  printOdds(game)