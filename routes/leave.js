'use strict';
const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const leaveMessageModel = require('../models/mongodb').leaveMessageModel;

router.get('/off', checkLogin, (req, res, next) => {
  leaveMessageModel.find({call: false}, ['name', 'tel', 'time', 'remarks', 'message']).sort({
    'time': -1
  }).exec().then((doc) => {
    // console.log(doc);
    res.render('leaveoff', {
      title: '未操作留言-后台管理',
      doc
    })
  }).catch(next)
});

router.get('/ok', checkLogin, (req, res, next) => {
  leaveMessageModel.find({call: true}, ['name', 'tel', 'time', 'remarks', 'message']).sort({
    'time': -1
  }).exec().then((doc) => {
    res.render('leaveok', {
      title: '已操作留言-后台管理',
      doc
    })
  }).catch(next)
});
// 删除留言
router.get('/:leaveID/remove', checkLogin, (req, res, next) => {
  let leaveID = req.params.leaveID;
  // console.log(leaveID);
  leaveMessageModel.remove({_id: leaveID}, (err) => {
    if (err) {
      console.log(err);
      return next;
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('ok');
  })
});

// 留言回访
router.get('/:leaveID/returnleave', checkLogin, (req, res, next) => {
  let leaveID = req.params.leaveID;
  leaveMessageModel.findOneAndUpdate({_id: leaveID}, {
    call: true
  }, (err, row) => {
    if (err) {
      console.log(err);
      return next;
    }
    // console.log(row);
    res.end('ok');
  })
});

// 增加留言
router.post('/', (req, res, next) => {
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
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('ok');
}, (err, small) => {
  if (err) {
    return console.log(err)
  }
});

module.exports = router;
