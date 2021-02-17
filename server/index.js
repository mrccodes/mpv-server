const express = require('express');
const cors = require('cors');
const app = express();
const createNewGame = require('../db/controllers/game.js');
const findGames = require('../db/controllers/findGames.js');
const {getScoreBoard} = require('../db/controllers/scoreboard.js');
const {updateScoreboard} = require('../db/controllers/scoreboard.js');
const bodyParser = require('body-parser');
const {updateWinner} = require ('../db/controllers/scoreboard.js')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const port = 3000;

app.post('/api/scoreboard/:gameId/:holeNumber', async (req, res) => {
  const hole = req.params.holeNumber;
  const gameId = req.params.gameId;
  console.log(`updating scores for hole ${hole}`)
  updateScoreboard(gameId, hole, req.body)
  .then((data) => {
    res.send()
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end()
  })

})

app.get('/api/scoreboard/:gameId/:holeNumber', async (req, res) => {
  console.log('checking database for games')
  const hole = req.params.holeNumber;
  const gameId = req.params.gameId
  getScoreBoard(gameId, hole)
    .then((sb) => {
      res.send(sb)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })

})

app.post('/api/winner/:gameId/:winner', async (req, res) => {
  const game = req.params.gameId;
  const winner = req.params.winner;

  updateWinner(game, winner)
    .then((data) => {
      res.send()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

app.get('/api/games', async (req, res) => {
  findGames()
    .then((games) => {
      res.send(games);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

app.post('/api/games', async (req, res) => {
  console.log('posting new game to database')
  console.log(req.body);
  createNewGame(req.body.numberOfHoles, req.body.players)
    .then((data) => {
      res.send(response)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})




app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
