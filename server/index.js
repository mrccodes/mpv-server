const express = require('express');
const cors = require('cors');
const app = express();
const createNewGame = require('../db/controllers/game.js');
const {getScoreBoard} = require('../db/controllers/scoreboard.js');
const {updateScoreboard} = require('../db/controllers/scoreboard.js');
const bodyParser = require('body-parser')

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
    console.log(data)

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

})

app.post('/api/games', async (req, res) => {
  console.log('posting new game to database')
  console.log(req.body);
  let response = await createNewGame(req.body.numberOfHoles, req.body.players)
  res.send(response)
})




app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
