//package and module requirements
var express = require('express')
var expressSession = require('express-session');
var bodyParser = require('body-parser');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
// var User = require('./models/UserModel');
var beerRoutes = require('./routes/beerRoutes');
//var userRoutes = require('./routes/userRoutes');


//let's get going...
var app = express();
mongoose.connect('mongodb://localhost/beers');

app.use(express.static('public'));
app.use(express.static('node_modules'));

//some middleware that we need
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Configure passport-local to use user model for authentication
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Configure passport and session middleware
// app.use(expressSession({
//   secret: 'yourSecretHere',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());


app.use('/beers', beerRoutes);
//app.use('/users', userRoutes);


// app.all('*', function(req, res) {
//   res.sendFile(__dirname + "/public/index.html")
// });

// error handler to catch 404 and forward to main error handler
// not needed as we have the above route
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(); {
    message: err.message,
    error: err
  }
});

//start the server
app.listen('8000', function() {
  console.log("yo yo yo, on 8000 bro");
});
