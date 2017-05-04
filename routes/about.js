/**
 * Created by zone0 on 2017/5/3.
 */

'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('about', {
    title: '关于-三扬装饰有限公司'
  })
});

module.exports = router;
