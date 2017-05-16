/**
 * Created by zone0 on 2017/5/3.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const getValue = async function () {
    try {
      let getComInfo = require('../models/com').getComInfo;
      let title = '关于-三扬装饰有限公司';

      let doc = await getComInfo();
      res.render('about', {
        title,
        doc
      })
    } catch (e) {
      return next
    }
  }();
});

module.exports = router;
