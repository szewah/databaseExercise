var express = require('express');
var router = express.Router();
var path = require('path');

/* GET login page. */
router.get('/', function(req, res) {
    // res.send('respond with a resource');
    res.sendFile(path.join(__dirname, "../views/login.html"))
});



module.exports = router;
