angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink($scope.newLink).then(function (resp) {

      $scope.link.link = resp;
    });
  };
});
