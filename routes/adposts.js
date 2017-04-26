'use strict';
const express = require('express');
const router = express.Router();
const postModel = require('../models/mongodb').postModel;
const checkLogin = require('../middlewares/check').checkLogin;

router.get('/',checkLogin, (req, res, next) => {
  postModel.find({}, ['title', 'time', 'type']).sort({
    "time": -1
  }).exec().then((doc) => {
    res.render('adposts', {
      title: '后台管理-文章管理',
      doc: doc
    })
  }).catch(next)
});

router.get('/:postID/remove', checkLogin, (req, res, next) => {
  let postID = req.params.postID;
  // console.log(postID);
  // res.send('ok');
  postModel.remove({_id: postID},(err) => {
    if (err) throw new Error(err);
    req.flash('success', '删除文章成功');
    res.send('ok');
  })
});

module.exports = router;
