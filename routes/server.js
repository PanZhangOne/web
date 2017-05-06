/**
 * Created by zone0 on 2017/5/3.
 */
'use strict';
const express = require('express');
const router = express.Router();
const comInfoMode = require('../models/mongodb').comInfoMode;
const serversModel = require('../models/mongodb').serversModel;

router.get('/', (req, res, next) => {
  comInfoMode.findOne({_id: '590aacb7a982eb098c9d7cc6'}, (err, doc) => {
    if (err) {
      console.log(err);
      return next;
    }
    function getServers() {
      return new Promise((resolve, reject) => {
        serversModel.find({}, (err, server) => {
          if (err) reject(err);
          resolve(server)
        })
      })
    }
    getServers().then((server) => {
      res.render('server', {
        title: '服务-三扬装饰有限公司',
        doc,
        server
      })
    }).catch((e) => {
      console.log(e);
    })
  })
});

module.exports = router;
