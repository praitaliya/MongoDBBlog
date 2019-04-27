var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mangooes = require('mongoose');

let promise = mangooes.connect('mongodb+srv://s1g1-blog:s1g1-blog@s1g1-blog-qcbvo.mongodb.net/S1G1-Blog?retryWrites=true');
promise.then(
    () => {
      console.log('Connected');
    },
    err => {
      console.log('Failed to Connect'+err);
    }
)
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var posts = require('./routes/posts');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',
      'http://localhost:4200');
  res.header("Access-Control-Allow-Headers","Origin,XRequested-With,Content-Type,Accept");
  res.header('Access-Control-Allow-Methods','POST,PATCH,GET,PUT,DELETE,OPTIONS');
  next();
});

//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
//app.use(express.static(path.join(__dirname,'public')));

//use Express to handle routes
app.use('/posts',posts);
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
  res.render('error');
});

module.exports = app;
