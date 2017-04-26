const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

router.get('/',checkLogin , (req, res) => {
  res.render('newproject',{
    title: '项目管理，新建项目'
  })
})

module.exports = router;
