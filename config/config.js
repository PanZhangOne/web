module.exports = {
  port: 3000,
  session: {
    secret: 'sanyang',
    key: 'sanyang',
    maxAge: 2592000000
  },
  mongodb:'mongodb://localhost:27017/sanyang'
};
