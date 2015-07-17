'use strict';

angular.module('rubicoinGatewayApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
