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

  bcrypt.hash(password, 10, (err, hash) => {
    req.flash("signMessage", "You are now registered");
    db.User.create({
      name: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.userEmail,
      password: hash
    }).then(results => {
      console.log(results);
    }).catch((err) => {
      res.json(err);
    });
  });
});


module.exports = router;
