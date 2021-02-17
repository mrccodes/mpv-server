const Game = require('../models/Games.js');

const createNewGame = (numOfHoles, players) => {
  const playersObj = {};
  for (const key of players) {
    playersObj[key] = 0
  }
  var newGame;
  console.log(playersObj)
  console.log(numOfHoles)
  if (numOfHoles === 9) {
     newGame = {
      holes: {
        one: playersObj,
        two: playersObj,
        three: playersObj,
        four: playersObj,
        five: playersObj,
        six: playersObj,
        seven: playersObj,
        eight: playersObj,
        nine: playersObj
      },
      winner: "Incomplete Game"

    }
    console.log(newGame)
  } else {
     newGame = {
      holes: {
        one: playersObj,
        two: playersObj,
        three: playersObj,
        four: playersObj,
        five: playersObj,
        six: playersObj,
        seven: playersObj,
        eight: playersObj,
        nine: playersObj,
        ten: playersObj,
        eleven: playersObj,
        twelve: playersObj,
        thirteen: playersObj,
        fourteen: playersObj,
        fifteen: playersObj,
        sixteen: playersObj,
        seventeen: playersObj,
        eighteen: playersObj
      },
      winner: "Incomplete Game"
    }
  }

    const addGame = new Game(newGame);
    return addGame.save()

}

  module.exports = createNewGame;
