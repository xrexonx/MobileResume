(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('summaryCtrl', function ($scope, oResume, ionicMaterialMotion) {

            var vm = $scope
            vm.summary = oResume.basics.summary;
            ionicMaterialMotion.fadeSlideIn();


        });

})();