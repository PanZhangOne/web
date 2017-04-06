'use strict'
const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

router.get('/', checkLogin, (req, res, next) => {
  req.session.user = null;
  req.flash('success', '成功退出');
  res.redirect('/');
})

module.exports = router;
