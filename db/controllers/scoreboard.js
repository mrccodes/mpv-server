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

const updateWinner = async (game, winner) => {
  const currentGame = await Game.findOne({_id: game});
  currentGame.winner = winner;
  currentGame.markModified('winner')
  return currentGame.save();
}

const updateScoreboard = async (game, hole, scoreBoard) => {
  const currentGame = await Game.findOne({_id: game});
  console.log(game, hole, scoreBoard);
  let updatedScore = {}
  for (const player in scoreBoard) {
    let name = scoreBoard[player].name;
    let score = scoreBoard[player].score
    updatedScore[name] = score
  }



  currentGame.holes[numToWord[hole]] = updatedScore;
  currentGame.markModified('holes')
  return currentGame.save();
}

const getScoreBoard = async (game, hole) => {
  const currentGame = await Game.findOne({_id: game})
  console.log(game)
  console.log(currentGame)
  return currentGame.holes[numToWord[hole]]
}

module.exports = {getScoreBoard: getScoreBoard, updateScoreboard: updateScoreboard, updateWinner: updateWinner};