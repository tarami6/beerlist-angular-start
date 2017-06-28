var app = angular.module('beerList', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainController',
      templateUrl: '/templates/home.html'
    })
    .state('beer', {
      url: '/beers/:id',
      controller: 'beerController',
      templateUrl: '/templates/beer.html',
      params: {
        beerParam: null
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'AuthCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'AuthCtrl'
    });
  $urlRouterProvider.otherwise('/home');
});
