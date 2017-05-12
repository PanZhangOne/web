/**
 * Created by Bennie on 2017/5/8.
 */
'use strict';

const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const designerModel = require('../models/mongodb').designersModel;

router.get('/', checkLogin, (req, res, next) => {
  res.render('designer', {
    title: '设计师管理-后台管理'
  })
});

router.get('/list', (req, res, next) => {

  designerModel.find({}, ['designername', 'avatar', 'introduction']).sort({
    _id: -1
  }).exec().then((doc) => {
    res.render('designerll', {
      title: '设计师列表-后台管理',
      doc
    })
  });
});
// 删除设计师
router.get('/:designerID/remove',checkLogin, (req, res, next) => {
  let designerID = req.params.designerID;
  designerModel.remove({_id: designerID}, (err) => {
    if (err) {
      console.log(err);
      return next
    }
    res.end('ok')
  })
});


router.post('/', checkLogin, (req, res, next) => {
  let designername = req.body.designername;
  let experience = req.body.experience;
  let introduction = req.body.introduction;
  let honor = req.body.honor;
  let avatar = req.body.avatar;
  let photo = req.body.photo;
  designerModel.create({
    designername,
    experience,
    introduction,
    honor,
    avatar,
    photo
  }, (err, small) => {
    if (err) {
      console.log(err);
      return next
    }
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('ok');
  });
});

module.exports = router;
