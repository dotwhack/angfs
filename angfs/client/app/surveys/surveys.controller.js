'use strict';

angular.module('angfsApp')
  .controller('SurveysCtrl', function ($scope, $http) {
	
	  
	  $scope.gridOptions = {
		columnDefs: [{field: 'CAD', name:'Case'}]
	  };
	  
	  $http.get('http://localhost:9000/api/surveys').success(function(data){
		  $scope.gridOptions.data = data;
	  });
  });
