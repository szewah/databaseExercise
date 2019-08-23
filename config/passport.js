const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;
const bcrypt = require('bcryptjs');


passport.use(
    new LocalStrategy ({ usernameField: "email" }, (email, password, done) => {
        ///when a user tries to sign in, this code runs
        User.findOne({
            where: {
            email: email
            }
        }).then((dbUser) => {
            if(!dbUser) {
            //if there's no such email, then this message is run
                return done(null, false, {message: "Couldn't find your account"});
            }
            bcrypt.compare(password, dbUser[0], dataValues.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, dbUser);
                } else {
                    return done(null, false, {message: "Incorrect password"});
                }
            });
        });
    })
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
  
module.exports = passport;