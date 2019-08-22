var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var PORT = process.env.PORT || 8080;
var db = require('./models');

// var signupRouter = require('./routes/signup');
// var formRouter = require('./routes/form');
// var data = require('./routes/apis/data');

db.User.create({
  name: 'Yes',
  lastName: 'No'
}).then(() => console.log('worked'));


var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// app.use('/signup', signupRouter);
// app.use('/form', formRouter);
// app.use('/api-data', data);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, function(err) {
  console.log("Magic is happening at http://localhost:" + PORT);
});