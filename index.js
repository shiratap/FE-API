'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use();-

app.get('/', (req, res) => {
  res.status(200).send('POL');
});

app.get('*', (req, res) => {
  res.status(404).send(`Can't find what you're lookin for buddy`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
