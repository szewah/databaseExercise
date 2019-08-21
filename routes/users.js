var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('This is the page for the user');
  res.sendFile(path.join(__dirname, "../views/form.html"))
});

module.exports = router;
