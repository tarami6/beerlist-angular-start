app.controller('masterController', function($scope, authFactory) {
  $scope.currentUser = authFactory.currentUser
  $scope.logout = authFactory.logout
  authFactory.getCurrentUser();
});
