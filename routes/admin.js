'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const comInfoMode = require('../models/mongodb').comInfoMode;
router.get('/', checkLogin, (req, res, next) => {
  comInfoMode.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return next
    }
    // console.log(doc);
    res.render('admin',{
      title: '后台管理首页',
      doc
    })
  })
});

router.post('/newcom',checkLogin,(req, res) => {
  let tel = req.body.tel;
  let email = req.body.email;
  let address = req.body.address;
  let synopsis = req.body.synopsis;
  comInfoMode.findOneAndUpdate({_id:'590aacb7a982eb098c9d7cc6'}, {
    tel,
    email,
    address,
    synopsis
  },{upsert: true}, {overwrite: true} , (err, row) => {
    if (err) {
      console.log(err)
    }
    // console.log(row);
    res.end('ok');
  })
});

module.exports = router;
