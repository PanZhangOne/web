const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.end('ok');
})

module.exports = router;
