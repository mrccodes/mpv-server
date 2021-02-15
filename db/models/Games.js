const mongoose, { Schema } = require('mongoose');
const db = require('../index.js');

const gameSchema = Schema({
  holes: Mixed
})

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;