/**
 * Created by zone0 on 2017/5/3.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const getValue = async function () {
    try {
      let comInfoModel = require('../models/com').getComInfo;
      let getServers = require('../models/servermodel').getServers;
      let title = '服务-三洋装饰有限公司';

      let doc = await comInfoModel();
      let server = await getServers();
      res.render('server', {
        title,
        doc,
        server
      })
    } catch (e) {
      console.log(e);
      return next;
    }
  }();
});

module.exports = router;
