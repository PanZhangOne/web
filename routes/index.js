module.exports = (app) => {
  app.use('/', require('./rindex'))
  app.use('/admin', require('./admin'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout'))
  app.use('/upload', require('./upload'))
  app.use('/posts', require('./posts'))
  app.use('/leave', require('./leave'))
  app.use('/test', require('./test'))
  app.use('/adposts', require('./adposts'))
}
