const express = require('express');
const port = 3000;
const app = express();

app.listen(port, function () {
  console.log("Server is running on port "+ port);
});

app.get('/ping', function (req, res) {
  res.send('<h1>Pong string</h1>')
})