'use strict';

angular.module('angfsApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    
    $scope.promote = function(user) {
    	Auth.changeRole(user._id, 'admin').then(function(){
    		$scope.message = 'Role successfully changed.';
    	});
    	angular.forEach($scope.users, function(u,i){
    		if(u === user){
    			u.role = 'admin';
    		}
    	});
    	
 
      };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
