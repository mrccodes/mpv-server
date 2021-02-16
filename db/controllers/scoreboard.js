const Game = require('../models/Games.js');

const numToWord = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen'
}

const updateScoreboard = async (game, hole, scoreBoard) => {
  const currentGame = await Game.find({_id: game});
  console.log(game, hole, scoreBoard);
  let updatedScore = {}
  for (const player in scoreBoard) {
    let name = scoreBoard[player].name;
    let score = scoreBoard[player].score
    updatedScore[name] = score
  }

  currentGame[0].holes[numToWord[hole]] = updatedScore;
  console.log('updated scoreboard', currentGame)
  return updatedScore;
}

const getScoreBoard = async (game, hole) => {
  const currentGame = await Game.find({_id: game})
  console.log(game)
  console.log(currentGame[0])
  return currentGame[0].holes[numToWord[hole]]
}

module.exports = {getScoreBoard: getScoreBoard, updateScoreboard: updateScoreboard};