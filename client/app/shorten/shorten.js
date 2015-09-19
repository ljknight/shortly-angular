angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink($scope.newLink)
      .then(function (resp) {
        $location.path('/');
        // allows access to link's data in the view
        $scope.link.link = resp;
      })
      .catch(function (err) {
        console.error(err);
      });
  };
});
