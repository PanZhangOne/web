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
  if (select === 'ordinary') {
    postModel.create({
      title: title,
      content: body,
      type: 'ordinary',
      time: time
    }, (err, small) => {
      if (err) return console.log(err);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === 'good') {
    postModel.create({
      title: title,
      content: body,
      type:'good',
      time: time
    }, (err, small) => {
      if (err) return console.log(err);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === 'top') {
    postModel.create({
      title: title,
      content: body,
      type: 'top',
      time: time
    }, (err, small) => {
      if (err) return console.log(err)
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  } else if (select === 'bulletin') {
    postModel.create({
      title: title,
      content: body,
      type: 'bulletin',
      time: time
    }, (err, small) => {
      if (err) return console.log(err)
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('ok');
    })
  }
});

module.exports = router;
