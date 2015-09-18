angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (link) {
    Links.addLink(link).then(function (resp) {
      $scope.link.link = resp;
    });
  };
});
