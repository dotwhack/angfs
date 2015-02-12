'use strict';

angular.module('angfsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('surveys', {
        url: '/surveys',
        templateUrl: 'app/surveys/surveys.html',
        controller: 'SurveysCtrl'
      });
  });