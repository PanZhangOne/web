/**
 * Created by Bennie on 2017/5/7.
 */
'use strict';
const express = require('express');
const router = express.Router();
const postsModel = require('../models/mongodb').postModel;
const conInfoModel = require('../models/mongodb').comInfoMode;

router.get('/:id', (req, res, next) => {
  let postID = req.params.id;
  conInfoModel.findOne({_id: '590aacb7a982eb098c9d7cc6'}, (err, doc) => {
    if (err) {
      console.log(err);
      return next
    }
    function getPost() {
      return new Promise((resolve, reject) => {
        postsModel.findOne({_id: postID},['title', 'content', 'time'] , (err, post) => {
          if (err) {
            reject(err)
          }
          resolve(post)
        })
      })
    }
    getPost().then((post) => {
      // console.log(post);
      res.render('detail', {
        doc,
        post
      })
    }).catch((err) => {
      console.log(err);
      next();
    })
  })
});

module.exports = router;
