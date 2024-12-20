const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(cors());

const movies = [
  { id: 1, title: 'Inception', imageUrl: 'https://example.com/inception.jpg' },
  { id: 2, title: 'The Matrix', imageUrl: 'https://example.com/matrix.jpg' },
  { id: 3, title: 'Interstellar', imageUrl: 'https://example.com/interstellar.jpg' },
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
