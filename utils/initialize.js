/**
 * Created by zone0 on 2017/5/3.
 */
'use strict';

const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.connect(config.mongodb);
const db = mongoose.connection;

const userModel = require('../models/mongodb').userModel;

db.on('error', console.log.bind(console, 'connect mongodb error...'));
db.once('open', (cb) => {
  console.log('success connected mongodb....');
});

const initAdmin = () => {
  let name = 'admin-sanyang';
  let password = '123456';
  let time = new Date();

  userModel.create({
    name,
    password,
    time
  }, (err, small) => {
    if (err) return console.log(err);
    console.log('管理员账号初始化成功');
  })
};

initAdmin();
