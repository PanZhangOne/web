'use strict';
const express = require('express');
const router = express.Router();
const comInfoMode = require('../models/mongodb').comInfoMode;

router.get('/', (req, res, next) => {
  comInfoMode.findOne({_id: '590aacb7a982eb098c9d7cc6'}, (err, doc) => {
    if (err) {
      console.log(err);
      return next
    }
    res.render('index', {
      doc
    })
  })
});

module.exports = router;
