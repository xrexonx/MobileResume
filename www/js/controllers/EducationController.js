(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('educationCtrl', function ($scope, $timeout, oResume, ionicMaterialMotion) {

            var vm = $scope
            vm.education = oResume.education;

            $timeout(function () {
                ionicMaterialMotion.fadeSlideInRight();
            }, 300);

        });

})();