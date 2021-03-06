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
  type: String, // 类型
  time: String,  // 时间
  img: String
});

const postModel = mongoose.model('post', postSchema);
exports.postModel = postModel;

// 项目展示
const showInfoSchema = new mongoose.Schema({
  title: String,  // 标题
  img: String,  // 缩略图
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
  time: String,  // 时间
  operate: Boolean, // 操作
  call: Boolean,  // 是否回访
  remarks: String,  // beizhu
  message: String
});

const leaveMessageModel = mongoose.model('leavemessage', leaveMessageSchema);
exports.leaveMessageModel = leaveMessageModel;

// 公司信息
const comInfoSchema = new mongoose.Schema({
  tel: String,
  email: String,
  address: String,
  synopsis: String
});
const comInfoModel = mongoose.model('cominfo', comInfoSchema);
exports.comInfoMode = comInfoModel;

// 服务
const serversScheam = mongoose.Schema({
  title: String,
  content: String,
  img: String
});
const serversModel = mongoose.model('server', serversScheam);
exports.serversModel = serversModel;

// 设计师数据模型
const designers = mongoose.Schema({
  designername: String,  // 姓名
  experience: String,  // 工作年限 or 工作经验
  introduction: String,  // 个人简介
  honor: String,  // 个人荣誉
  avatar: String,  // 头像
  photo: String  // 照片
});

const designersModel = mongoose.model('design', designers);
exports.designersModel = designersModel;
