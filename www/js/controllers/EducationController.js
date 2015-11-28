(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('educationCtrl', function ($scope, Resume) {

            var vm = $scope;

            Resume
                .get('rexon.json')
                .success(function(response) {
                    vm.resume = response;
                });

        });

})();