const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const serversModel = require('../models/mongodb').serversModel;

router.get('/', checkLogin, (req, res, next) => {
  serversModel.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return next;
    }
    res.render('newproject', {
      title: '服务管理-后台管理',
      doc
    })
  });
});

router.post('/', checkLogin, (req, res, next) => {
  let title = req.body.title;
  let content = req.body.content;
  let img = req.body.img;
  // console.log(img)
  serversModel.create({
    title,
    content,
    img
  }, (err, small) => {
    if (err) {
      console.log(err);
      return next;
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('ok');
  })
});

module.exports = router;
