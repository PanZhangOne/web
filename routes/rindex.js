'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const getValue = async function () {
    let getINdexTop = require('../models/indexmodel').getIndexTop;
    let getIndexMiddle = require('../models/indexmodel').getIndexMiddle;
    let getComInfo = require('../models/com').getComInfo;
    let doc = await getComInfo();
    let posts = await getINdexTop();
    let casePost = await getIndexMiddle();
    res.render('index', {
      doc,
      posts,
      casePost
    })
  }();
});

module.exports = router;
