(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('educationCtrl', function ($scope, oResume) {

            var vm = $scope
            vm.education = oResume.education;

        });

})();