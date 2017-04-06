'use strict'
const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.connect(config.mongodb);
const db = mongoose.connection;

db.on('error', console.log.bind(console, '链接数据库错误'));
db.once('open', (cb) => {
  console.log('链接数据库成功');
});

const adminSchema = new mongoose.Schema({
  name: String,
  password: String,
  time: Date
});

const userModel = mongoose.model('user', adminSchema);

exports.userModel = userModel;

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  pv: Number,
  top: Boolean,
  good: Boolean,
  bulletin: Boolean,
  time: Date
})

const postModel = mongoose.model('post', postSchema);

exports.postModel = postModel;
