const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/api', (req, res) => {
  res.json({
    title: 'Relaxing Spa API',
    description: 'This is a sample server for a Relaxing Spa API.',
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '1.0.1',
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
