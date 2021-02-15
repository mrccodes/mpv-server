const express = require('express');
const cors = require('cors');
const app = express();
const createNewGame = require('../db/controllers/game.js')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const port = 3000;

app.get('/api/games', (res, req) => {
  console.log('checking database for games')
  console.log(req)
})

app.post('/api/games', async (req, res) => {
  console.log('posting new game to database')
  console.log(req.body);
  let response = await createNewGame(req.body.numberOfHoles, req.body.players)
  res.send(response)

})

app



app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
