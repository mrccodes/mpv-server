const Game = require('../models/Games.js')

const findGames = async () => {
  const games = await Game.find();
  return games;
}

module.exports = findGames ;


