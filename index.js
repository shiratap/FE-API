'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.static('public'));

const api = require('./src/routes.js');

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.use(api);

app.get('*', (req, res) => {
  res.status(404).send(`Can't find what you're lookin for buddy`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
