
// Dependencies 
const http         = require('http');
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const dotEnv       = require('dotenv').config();
// ----------------------------------------------------------------------------

// Server
const port         = process.env.PORT || 8080;
const app          = express();
const server       = http.createServer(app);
// ----------------------------------------------------------------------------

// Routes
const routes       = require('./routes/index');
const users        = require('./routes/users');
const ticker       = require('./public/javascripts/ticker');
// ----------------------------------------------------------------------------

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// ----------------------------------------------------------------------------

// Middleware for every path
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ----------------------------------------------------------------------------

// Middleware for specific path
app.use('/', routes);
app.use('/users', users);
// ----------------------------------------------------------------------------

// Error handlers

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
// ----------------------------------------------------------------------------

// Server listen
server.listen(port, function() {
  console.log( 'http://localhost:' + port + ' : server has been launched' );
});
