const express = require('express');
const checkLogin = require('../middlewares/check').checkLogin;
const router = express.Router();

router.get('/',checkLogin , (req, res, next) => {
  res.render('allposts');
})

module.exports = router;
