'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const postModel = require('../models/mongodb').postModel;

// get
router.get('/', checkLogin, (req, res, next) => {
  postModel.find((err, doc) => {
    if (err) return console.log(err);
    res.render('posts', {
      title: '文章管理-新建文章',
      doc: doc
    })
  })
});

// 增加文章
router.post('/', checkLogin, (req, res, next) => {
  let title = req.body.title;
  let body = req.body.content;
  let select = req.body.select;
  let time = req.body.time;
  // let activeClass = ['ordinary','good', 'top', 'bulletin'];
  if (select === '普通') {
    postModel.create({
      title: title,
      content: body,
      type: '普通',
      time: time
    }, (err, small) => {
      if (err) return console.log(err);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === '首页') {
    postModel.create({
      title: title,
      content: body,
      type:'首页',
      time: time
    }, (err, small) => {
      if (err) return console.log(err);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === '案例') {
    postModel.create({
      title: title,
      content: body,
      type: '案例',
      time: time
    }, (err, small) => {
      if (err) return console.log(err)
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === '公告') {
    postModel.create({
      title: title,
      content: body,
      type: '公告',
      time: time
    }, (err, small) => {
      if (err) return console.log(err)
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  }
});

module.exports = router;
