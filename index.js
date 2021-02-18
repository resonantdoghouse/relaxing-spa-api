const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const quotes = [
  {
    id: 1,
    quote:
      'You’re braver than you believe, stronger than you seem and smarter than you think',
    source: 'Christopher Robin',
  },
  {
    id: 2,
    quote: 'People say nothing is impossible, but I do nothing every day.',
    source: 'Winnie the Pooh',
  },
  {
    id: 3,
    quote: 'It never hurts to keep looking for sunshine.',
    source: 'Eeyore',
  },
];

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
