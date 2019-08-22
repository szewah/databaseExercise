var express = require('express');
var router = express.Router();
var path = require('path');
// var db = require('../models');


// /* GET users listing. */
router.get('/', function(req, res) {
    res.send("hello this is the data page");
//   db.Profile.findAll().then(results => {
//       res.json(results);
//   })
});

module.exports = router;
