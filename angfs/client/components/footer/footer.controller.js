'use strict';

angular.module('angfsApp')
  .controller('FooterCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });