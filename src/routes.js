'use strict';

const express = require('express');
const router = express.Router();

router.get('/api/v1/all', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/AllRadiantDawn.json'));
});

router.get('/api/v1/Characters', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/Characters.json'));
});

router.get('/api/v1/Daein', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/Daein.json'));
});

router.get('/api/v1/Begnion', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/Daein.json'));
});

module.exports = router;
