/**
 * Created by Bennie on 2017/5/7.
 */
'use strict';
const postModel = require('./mongodb').postModel;
const comInfoMode = require('./mongodb').comInfoMode;

// 首页顶部轮播图数据
const getIndexTop = function () {
  return new Promise((resolve, reject) => {
    postModel.find({type: '首页'}, ['img', 'title'], {limit: 3}).sort({
      'time': -1
    }).exec().then((doc) => {
      resolve(doc)
    }).catch((err) => {
      reject(err)
    })
  })
};
exports.getIndexTop = getIndexTop;

// 首页中部轮播图数据
const getIndexMiddle = function getCasePost() {
  return new Promise((resolve) => {
    postModel.find({type: '案例'}, ['img', 'title' , 'content'], {limit: 3}).sort({
      'time': -1
    }).exec().then((doc) => {
      resolve(doc)
    })
  })
};

exports.getIndexMiddle = getIndexMiddle;

