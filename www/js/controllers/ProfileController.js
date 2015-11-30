(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('profileCtrl', function ($scope, $timeout, oResume, ionicMaterialInk, ionicMaterialMotion) {

            var vm = $scope;
            vm.resume = oResume.basics;

            // Set Motion
            $timeout(function() {
                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);


            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);

            // Set Ink
            ionicMaterialInk.displayEffect();

        });

})();