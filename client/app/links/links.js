angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  // console.log('LNKS: ', Links.success);
  $scope.getLinks = function ( ) {
    // return Links;
    Links.getLinks().then(function (resp) {
      $scope.data.links = resp;
    });

  }
  $scope.getLinks();
});