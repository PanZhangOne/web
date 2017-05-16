/**
 * Created by Bennie on 2017/5/16.
 */
const path = require('path');
const assert = require('assert');
const request = require('supertest');
const app = require('../index');
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
    // 删除测试文章
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

describe('router test', function () {
  it('test index page', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done()
      })
  });
  it('test server page', function (done) {
    request(app)
      .get('/server')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done();
      })
  });
  it('test about page', function (done) {
    request(app)
      .get('/about')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done()
      })
  });
  it('test contact page', function (done) {
    request(app)
      .get('/contact')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done()
      })
  });
  it('test gallery page', function (done) {
    request(app)
      .get('/gallery')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done()
      })
  });
});
