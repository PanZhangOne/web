module.exports = (app) => {
  app.use('/', require('./rindex'))
  app.use('/admin', require('./admin'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout'))
  app.use('/upload', require('./upload'))
}
