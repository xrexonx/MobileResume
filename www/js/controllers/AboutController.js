(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('aboutCtrl', function ($scope, $timeout, ionicMaterialMotion, oResume) {

            var vm = $scope;
            vm.about = oResume.about;

            $timeout(function() {
                ionicMaterialMotion.ripple({
                    startVelocity: 3000
                });
            }, 700);
        });

})();