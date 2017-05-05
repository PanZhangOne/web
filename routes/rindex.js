'use strict';
const express = require('express');
const router = express.Router();
const comInfoMode = require('../models/mongodb').comInfoMode;

router.get('/', (req, res, next) => {
  comInfoMode.find({}, (err, doc) => {
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
