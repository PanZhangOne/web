'use strict';
const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const config = require('./config/config');
const routes = require('./routes');

const pkg = require('./package');
const winston = require('winston');
const expressWinston = require('express-winston');
// express bodyParser 中间件
app.use(bodyParser.urlencoded({extended: false}));
// 设置模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');
// 设置静态文件夹
app.use(express.static('./public'));
// session 中间件
app.use(session({
  name: config.session.key,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: config.session.maxAge
  },
  store: new MongoStore({
    url: config.mongodb
  })
}));

app.use(flash());
// 设置flash提示
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.success = req.flash('success').toString();
  res.locals.error = req.flash('error').toString();
  next();
});
// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));
// 路由
routes(app);
// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));

app.use((err, req, res, next) => {
  res.render('error', {
    err
  })
});

if (module.parent) {
  module.exports = app;
} else {
  app.listen(config.port, () => {
    console.log(`app listening on ${config.port}`)
  });
}
