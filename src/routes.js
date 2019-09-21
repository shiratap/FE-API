'use strict';

const express = require('express');
const router = express.Router();

router.get('/api/v1/all', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/AllRadiantDawn.json'));
});

router.get('/api/v1/Characters', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/Characters.json'));
});

router.get('/api/v1/StarterCharacters', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/gameCharacters.json'));
});

router.get('/api/v1/Begnion', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/Begnion.json'));
});
router.get('/api/v1/enemies', (req, res) => {
  res.status(200).send(require('../API/v1/RadiantDawn/enemies.json'));
});

module.exports = router;
