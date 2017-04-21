'use strict';
const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.connect(config.mongodb);
const db = mongoose.connection;

db.on('error', console.log.bind(console, 'connect mongodb error...'));
db.once('open', (cb) => {
  console.log('success connected mongodb....');
});
// 管理员账号
const adminSchema = new mongoose.Schema({
  name: String,
  password: String,
  time: Date
});

const userModel = mongoose.model('user', adminSchema);
exports.userModel = userModel;
// 文章
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  pv: Number, // 阅读量
  ordinary: Boolean, // 普通文章
  top: Boolean, // 置顶文章
  good: Boolean, // 精华
  bulletin: Boolean, // 公告
  time: Date
});

const postModel = mongoose.model('post', postSchema);
exports.postModel = postModel;

// 项目展示
const showInfoSchema = new mongoose.Schema({
  title: String,  // 标题
  content: String,  // 内容
  time: String,  // 时间
  index: Boolean  // 是否展示到首页
});
const showInfoModel = mongoose.model('showinfo', showInfoSchema);
exports.showInfoModel = showInfoModel;

// 留言
const leaveMessageSchema = mongoose.Schema({
  name: String,  // 留言者姓名
  tel: String,  // 联系方式
  time: Date,  // 时间
  operate: Boolean, // 操作
  call: Boolean  // 是否回访
});

const leaveMessageModel = mongoose.model('leavemessage', leaveMessageSchema);
exports.leaveMessageModel = leaveMessageModel;
