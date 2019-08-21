var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname, "../views/signup.html"))
});

module.exports = router;
