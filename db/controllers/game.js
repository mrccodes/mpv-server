const Game = require('../models/Games.js');

const createNewGame = (numOfHoles, players) => {
  const playersObj = {};
  for (const key of players) {
    playersObj[key] = 0
  }

  if (numOfHoles === 9) {
    const newGame = {
      1: playersObj,
      2: playersObj,
      3: playersObj,
      4: playersObj,
      5: playersObj,
      6: playersObj,
      7: playersObj,
      8: playersObj,
      9: playersObj
    }

  } else {
    const newGame = {
      1: playersObj,
      2: playersObj,
      3: playersObj,
      4: playersObj,
      5: playersObj,
      6: playersObj,
      7: playersObj,
      8: playersObj,
      8: playersObj,
      10: playersObj,
      11: playersObj,
      12: playersObj,
      13: playersObj,
      14: playersObj,
      15: playersObj,
      16: playersObj,
      17: playersObj,
      18: playersObj
    }

    const addGame = new Game(newGame);
    return addGame.save()
  }

  module.exports = createNewGame;
