'use strict';

const express = require('express');
const app = express();
var path = require('path');
const PORT = process.env.PORT || 3000;

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
