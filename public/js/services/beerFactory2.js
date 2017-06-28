app.factory('beerFactory', function($http) {

  var beerFactory = {};

  var successHandler = function(response) {
    return response.data;
  }

  beerFactory.getBeers = function() {
    return $http.get('/beers')
      .then(successHandler);
  };

  beerFactory.getBeer = function(id) {
    return $http.get('/beers/' + id)
      .then(successHandler);
  };

  beerFactory.updateBeer = function(beer) {
    return $http.put('/beers/' + beer._id, beer)
      .then(successHandler);
  };


  beerFactory.addBeer = function(newBeer) {
    return $http.post('/beers', newBeer)
      .then(successHandler);
  };

  beerFactory.removeBeer = function(beer) {
    return $http.delete('/beers/' + beer._id)
      .then(successHandler);
  };

  return beerFactory;
});
