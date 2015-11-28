(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('profileCtrl', function ($scope, oResume) {

            var vm = $scope
            vm.resume = oResume.basics;

        });

})();