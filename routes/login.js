const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('../config/passport');

/* GET login page. */
router.get('/login', function(req, res) {
    // res.send('respond with a resource');
    res.sendFile(path.join(__dirname, "../views/login.html"))
});

router.post('/api/login', function(req, res) {
    passport.authenticate('local', {
        successRedirect: '/form',
        failureRedirect: '/login',
        failureFlash: true
    })
})

router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    return res.redirect('/login')
});


module.exports = router;
