const mongoose = require('mongoose');
const Schema = require('mongoose');
const db = require('../index.js');

const gameSchema = mongoose.Schema({
  holes: {}
})

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;