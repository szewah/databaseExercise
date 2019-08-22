var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');

/* GET signup page. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname, "../views/signup.html"))
});

router.post('/api/signups', async(req, res) => {
  res.send("You were posted");
})


module.exports = router;
