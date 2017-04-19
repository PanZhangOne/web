/**
 * Created by zone0 on 2017/4/19.
 */

const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
  res.render('test',{
    title: 'cest'
  })
});

module.exports = router;
