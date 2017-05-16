/**
 * Created by Bennie on 2017/5/7.
 */
'use strict';
const postModel = require('./mongodb').postModel;
const designerModel = require('./mongodb').designersModel;

/**
 * 首页顶部轮播图展示数据
 * @return {Promise}
 * */
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

/**
 * 首页中部展示的数据
 * @return {Promise}
 * */
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

/**
 * 获取设计师数据
 * @return {Promise}
 * */
const getDesigner = function () {
  return new Promise((resolve, reject) => {
    designerModel.find({}, ['designername', 'avatar', 'introduction', 'photo'], {limit: 5})
      .sort({
        _id: -1
      }).exec().then((doc) => {
      resolve(doc)
    }).catch((err) => {
      reject(err)
    })
  })
};
exports.getDesigner = getDesigner;
