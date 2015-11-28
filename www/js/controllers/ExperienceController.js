(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('experienceCtrl', function ($scope, $timeout, oResume, ionicMaterialInk, ionicMaterialMotion) {

            var vm = $scope
            vm.experience = oResume.work;

//console.log(ionicMaterialMotion);

            $timeout(function () {
                ionicMaterialMotion.fadeSlideInRight();
            }, 300);
            //ionicMaterialMotion.ripple();

        });

})();