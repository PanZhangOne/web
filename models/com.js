/**
 * Created by Bennie on 2017/5/7.
 */
'use strict';

const comInfoModel = require('./mongodb').comInfoMode;

/**
 * 获取公司信息
 * @return {Promise}
 * */
const getComInfo = function () {
  return new Promise((resolve, reject) => {
    comInfoModel.findOne({_id: '590aacb7a982eb098c9d7cc6'}, (err, doc) => {
      if (err) {
        reject(err)
      }
      resolve(doc)
    })
  })
};
exports.getComInfo = getComInfo;
