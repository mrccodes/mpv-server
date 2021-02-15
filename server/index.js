const express = require('express');
const cors = require('cors');
const app = express();
const createNewGame = require('../db/controllers/game.js')

app.use(cors())


const port = 3000;

app.get('/api/games', (res, req) => {
  console.log('checking database for games')
  console.log(req)
})

app.post('/api/games', (req, res) => {
  console.log('posting new game to database')
})

app



app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
