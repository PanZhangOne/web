'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
const url = require('url');

const uploadfoldername = 'uploadfiles';
// const uploadfolderpath = path.join(__dirname, uploadfoldername);
const uploadfolderpath = './public/uploadfiles';
const SERVER = 'localhost';

router.post('/',(req,res,next) => {
  console.log('路由' + req.url);
  const form = new formidable.IncomingForm();
  // 设置上传临时文件夹
  form.uploadDir = 'tmp';

  form.parse(req, (err, fields, files) => {
    if (err) return console.log(err);
    let item;
    let length = 0;
    for (item in files) {
      length++;
    }
    if (length === 0) {
      console.log('files no  data');
      return;
    }
    for (item in files) {
      let file = files[item];
      let tempfilepath = file.path;
      let type = file.type;
      // console.log('console start');
      // console.log('....................................')
      // console.log(file)
      console.log(tempfilepath);
      // console.log(type)
      let filename = file.name;
      let extname = filename.lastIndexOf('.') >= 0
        ? filename.slice(filename.lastIndexOf('.') - filename.length)
        : '';
      // console.log(filename)
      // console.log(extname);
      if (extname === '' && type.indexOf('/') >= 0) {
        extname = '.' + type.split('/')[1];
      }
      filename = Math.random().toString().slice(2) + extname;
      let filenewpath = path.join(uploadfolderpath, filename);
      // console.log(filenewpath);
      // console.log(filename);
      fs.rename(tempfilepath, filenewpath, (err) => {
        let result = '';
        if (err) {
          console.log(err);
          result = 'error|save error';
        } else {
          // console.log('fs.rename done');
          result = `http://${SERVER}:3000/${uploadfoldername}/${filename}`
        }
        res.writeHead(200, {
          'Content-type': 'text/html'
        });
        res.end(result);
      })
    }
  })
});


module.exports = router;
