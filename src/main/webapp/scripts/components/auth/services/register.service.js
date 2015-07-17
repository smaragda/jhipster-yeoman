'use strict';

angular.module('rubicoinGatewayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


