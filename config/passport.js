const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

passport.use(new LocalStrategy ({ usernameField: "email" }, (email, password, done) => {
        User.findOne({
            where: {
            username: username
            }
        }).then((dbUser) => {
            if(!dbUser) {
                return done(null, false, {message: "Wrong email"});
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {message: "Wrong password."});
            }
            return done(null, dbUser);
        });
    }   
));

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