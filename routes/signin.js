'use strict'
const express = require('express');
const router = express.Router();
const userModel = require('../models/mongodb').userModel;
const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/', checkNotLogin, (req, res, next) => {
  res.render('signin', {
    title: '登陆'
  })
});
router.post('/', checkNotLogin, (req, res, next) => {
  let response = res;
  let username = req.body.name;
  let password = req.body.password;

  userModel.findOne({ 'name': username }, (err, user) => {
    if (err) return console.log(err);
    if (!user) {
      req.flash('error', '用户不存在');
      return res.redirect('back');
    }
    // console.log(password)
    if (password !== user.password) {
      req.flash('error', '用户名或密码错误');
      return res.redirect('back');
    }
    req.flash('success', '登陆成功');
    delete user.password;
    req.session.user = user;
    res.redirect('/admin');
  })
});

module.exports = router;
