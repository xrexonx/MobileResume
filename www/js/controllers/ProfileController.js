(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('profileCtrl', function ($scope, oResume, ionicMaterialInk, ionicMaterialMotion) {

            //console.log(ionicMaterialInk);
            //console.log(ionicMaterialMotion);

            ionicMaterialMotion.slideUp('xx');
            var vm = $scope
            vm.resume = oResume.basics;

        });

})();