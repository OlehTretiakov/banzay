const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
  printGoals(...goals){
    console.log(goals);
  }
};

const [players1, players2] = game.players
const [team1Goalkeeper, ...team1FieldPlayers] = players1
const [team2Goalkeeper, ...team2FieldPlayers] = players2
const allPlayers = [...players1, ...players2]
const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola']
const{team1, draw, team2} = game.odds
game.printGoals(...game.scored)

console.log((team1 < team2 && `${game.team1} will win`) || (`${game.team2} will winn`));