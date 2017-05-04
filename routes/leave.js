'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const leaveMessageModel = require('../models/mongodb').leaveMessageModel;

router.get('/off', (req, res, next) => {
  leaveMessageModel.find({operate: false}, ['name', 'tel', 'time', 'remarks', 'message']).sort({
    'time': -1
  }).exec().then((doc) => {
    // console.log(doc);
    res.render('leaveoff', {
      title: '未操作留言-后台管理',
      doc
    })
  }).catch(next)
});

router.post('/',checkLogin, (req, res, next) => {
  let name = req.body.name;
  let tel = req.body.tel;
  let message = req.body.message;
  let time = req.body.time;
  let operate = false;
  let call = false;
  leaveMessageModel.create({
    name,
    tel,
    message,
    time,
    operate,
    call
  });
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('ok');
}, (err, small) => {
  if (err) {
    return console.log(err)
  }
});

module.exports = router;
