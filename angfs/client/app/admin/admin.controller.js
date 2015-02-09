'use strict';

angular.module('angfsApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

	$scope.oneAtATime = true;
    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.roles = ['user','editor','admin'];
    $scope.test = function(){
    	console.log($scope.oneAtATime);
    }; 
    
    
    $scope.changeRole = function(user) {
    	Auth.changeRole(user._id, user.role).then(function(){

    	});
//    	angular.forEach($scope.users, function(u,i){
//    		if(u === user){
//    			u.role = 'admin';
//    		}
//    	});
    	
 
      };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
    
   

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    
    
    
    
  });
