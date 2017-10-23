const fs = require('fs');
const fetch = require('./fetch')
const express = require('express')
const app = express()

app.listen(9000, function () {
  console.log('Listening on port 9000')
})

// app.get('/', function (req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send("MLS App");
// })

// app.get('/topScorers', function (req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   //res.send(JSON.stringify(fetch.fetchTopScorers()));
//   res.send(fetch.fetchTopScorers());
// })

app.get('/players', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(fetch.fetchPlayers());
});