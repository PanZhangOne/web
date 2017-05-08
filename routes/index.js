module.exports = (app) => {
  app.use('/', require('./rindex'));
  app.use('/admin', require('./admin'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/upload', require('./upload'));
  app.use('/posts', require('./posts'));
  app.use('/leave', require('./leave'));
  app.use('/adposts', require('./adposts'));
  app.use('/newproject', require('./newproject'));
  app.use('/server', require('./server'));
  app.use('/gallery', require('./gallery'));
  app.use('/about', require('./about'));
  app.use('/contact', require('./contact'));
  app.use('/project', require('./project'));
  app.use('/detail', require('./detail'));
  app.use((req, res) => {
    if (!res.headersSen) {
      res.status(404).render('404');
    }
  })
};
