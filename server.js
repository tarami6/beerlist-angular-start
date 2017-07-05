var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

//Beer Db 
mongoose.connect('mongodb://localhost/beers');
var Beer = require('./beerModel.js');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// handler Func
var handler = function(res,next){
  return function(err, beer){
    if(err){
      return next(err);
    } else {
      res.send(beer);
    }
  }
}

// get beer from dataBade 'beers'

app.get('/beers', function (req, res, next) {
  Beer.find(handler(res,next));
});

// add beers to our database
app.post('/beers', function (req, res, next) {
  Beer.create(req.body, handler(res,next))
})

// deleting beer from db
app.delete('/beers/:id', function (req, res, next) {
  Beer.findByIdAndRemove(req.params.id, handler(res,next));
});
// updating the rate of the beer
app.post('/beers/:id/:ratings', function (req, res, next) {

  // code a suitable update object
  // using req.body to retreive the new rating
  var updateObject = { $push: { ratings: req.body.ratings } };
  console.log(updateObject);
  Beer.findByIdAndUpdate(req.params.id, updateObject, { new: true }, handler(res,next));
});

app.put('/beers/:id', function(req, res, next) {
  console.log('update');
  console.log(req.body);
  Beer.findByIdAndUpdate(req.params.id, req.body, handler(res,next));
});


// middleware to handle errors
// err handler to cath 404 and forward to main error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!

app.use(function (err, rew, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});





app.listen(8000, function () {
  console.log("yo yo yo, on 8000!!")
});
