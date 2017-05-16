/**
 * Created by Bennie on 2017/5/16.
 */
const path = require('path');
const assert = require('assert');
const request = require('supertest');
const app = request('../index');
const PostsModel = require('../models/mongodb').postModel;

let testTitle = '测试文章';
let testContent = '测试文章内容';
let testType = '普通';
let testTime = new Date().toLocaleString();
let testImg = 'not img';
let testPV = 0;
describe('posts', function () {
  describe('POST /posts', function () {
    let agent = request.agent(app);
    // 发表文章
    beforeEach((done) => {
      PostsModel.create({
        title: testTitle,
        content: testContent,
        type: testType,
        time: testTime,
        img: testImg,
        pv: testPV
      }).exec()
        .then(function (done) {
          done()
        })
        .catch(done)
    });
    afterEach(function (done) {
      PostsModel.remove({title: {$in: testTitle}})
        .exec()
        .then(function (done) {
          done()
        })
        .catch(done)
    });
  });
});
