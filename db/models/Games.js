const mongoose = require('mongoose');
const db = require('../index.js');

const gameSchema = mongoose.Schema({
  holes: Object
})

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;