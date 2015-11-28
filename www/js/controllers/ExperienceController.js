(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('experienceCtrl', function ($scope, oResume) {

            var vm = $scope
            vm.experience = oResume.work;

        });

})();