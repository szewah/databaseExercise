var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');

/* GET signup page. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname, "../views/signup.html"))
});

router.post('/', async(req, res) => {
  console.log(req.body);
  db.User.create({
    name: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.userEmail,
    password: req.body.userPassword
  }).then(results => {
    console.log(results);
  }).catch((err) => {
    console.log(err);
    req.json(err);
  });
});


module.exports = router;
