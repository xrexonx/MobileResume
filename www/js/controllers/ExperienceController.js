(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('experienceCtrl', function ($scope, $timeout, oResume, ionicMaterialMotion) {

            var vm = $scope
            vm.experience = oResume.work;

            $timeout(function () {
                ionicMaterialMotion.fadeSlideInRight();
            }, 300);

        });

})();
