'use strict';
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const uploadfoldername = 'uploadfiles';
const uploadfolderpath = path.join(__dirname, uploadfoldername);

const server = 'localhost';

router.post('/', (req, res, next) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return new Error(err);
    }
    let item;
    let length = 0;
    for (item in files) {
      length++;
    }
    if (length === 0) {
      return;
    }
    for (item in files) {
      let file = files[item];
      let tempfilepath = file.path;
      let type = file.type;
      let filename = file.name;
      let extname = filename.lastIndexOf('.') >= 0 ? filename.slice(filename.lastIndexOf('.') - filename.length) : '';
      if (extname === '' && type.indexOf('/') >= 0) {
        extname = '.' + type.split('/')[1];
      }
      filename = Math.random().toString().slice(2) + extname;
      let filenewpath = path.join(uploadfolderpath, filename);
      fs.rename(tempfilepath, filenewpath, (err) => {
        let result = '';
        if (err) {
          console.log(err);
          result = 'error|save error';
        } else {
          console.log('fs.rename done');
          result = `http:// ${server}:3000/${uploadfoldername}/${filename}`;
        }
        res.writeHead(200, {
          'Content-type': 'text/html'
        });
        res.end(result);
      })
    }
  })
})

module.exports = router;
