/**
 * Created by zone0 on 2017/5/4.
 */

'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

// get

router.get('/', (req, res, next) => {
  res.render('project', {
    title: '项目管理-后台管理'
  })
});

module.exports = router;
