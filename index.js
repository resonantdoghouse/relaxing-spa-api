const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

async function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function loadQuotes() {
  return await readFile('./data/quotes.json');
}

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/quotes', (_req, res) => {
  loadQuotes()
    .then((quotes) => {
      res.send(quotes);
    })
    .catch((err) => {
      console.log(err);
      res.send('an error has occurred, check server for logs');
    });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
