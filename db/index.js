const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mpv', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mngoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully')
});

module.exports = db;