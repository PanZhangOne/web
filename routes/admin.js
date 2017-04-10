'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

router.get('/', checkLogin, (req, res, next) => {
  res.render('admin',{
    title: '后台管理首页'
  })
})

module.exports = router;
