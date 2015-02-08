'use strict';

angular.module('angfsApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      changeRole: {
          method: 'POST',
          params: {
            controller:'role'
          }
        },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
