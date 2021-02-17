const mongoose = require('mongoose');
const db = require('../index.js');

const gameSchema = mongoose.Schema({
  holes: Object,
  winner: String
})

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;