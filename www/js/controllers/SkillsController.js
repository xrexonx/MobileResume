(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('skillsCtrl', function ($scope, Resume) {

            var vm = $scope;

            Resume
                .get('rexon.json')
                .success(function(response) {
                    vm.resume = response;
                });

        });

})();