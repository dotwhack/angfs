'use strict';

angular.module('angfsApp')
  .controller('MessagesCtrl', function ($scope, $http, socket ) {
	  $scope.awesomeThings = [];
    
    $http.get('/api/messages').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        socket.syncUpdates('messages', $scope.awesomeThings);
      });
    
    $scope.addThing = function() {
        if($scope.newThing === '') {
          return;
        }
        $http.post('/api/messages', { name: $scope.newThing });
        $scope.newThing = '';
      };
      
    $scope.deleteThing = function(thing) {
    	console.log('Delete');
        $http.delete('/api/messages/' + thing._id);
      };
        
    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('messages');
      });
  });
