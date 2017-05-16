/**
 * Created by Bennie on 2017/5/7.
 */
'use strict';
const serversModel = require('./mongodb').serversModel;

/**
 * 获取公司具体服务
 * @return {Promise}
 * */
const getServers = function () {
  return new Promise((resolve, reject) => {
    serversModel.find({},['title', 'img', 'content'],{limit: 3}).sort({
      _id: -1
    }).exec().then((doc) => {
      resolve(doc)
    }).catch((err) => {
      reject(err)
    })
  })
};
exports.getServers = getServers;
