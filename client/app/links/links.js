angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks()
      // returns a promise
      .then(function (resp) {
        $scope.data.links = resp;
      })
      .catch(function (err) {
        console.error(err);
      });
  };
  $scope.getLinks();
});
