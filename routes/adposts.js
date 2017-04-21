'use strict';
const express = require('express');
const router = express.Router();
const postModel = require('../models/mongodb').postModel;

router.get('/', (req, res, next) => {
  postModel.find({}, ['title', 'time'], (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }
    res.render('adposts', {
      title: '后台管理-文章管理',
      doc: doc
    })
  })
});

module.exports = router;
