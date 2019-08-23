const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 8080;
const signupRouter = require('./routes/signup');
const formRouter = require('./routes/form');
const dataRouter = require('./routes/apis/data');
const loginRouter = require('./routes/login');
const flash = require('connect-flash');
const passport = require('./config/passport');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(flash());


//passport



//routers
app.use(signupRouter);
app.use('/profile-form', formRouter);
app.use('/api-data', dataRouter);
app.use(loginRouter)

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