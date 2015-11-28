(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('summaryCtrl', function ($scope, oResume) {

            var vm = $scope
            vm.summary = oResume.basics.summary;

        });

})();