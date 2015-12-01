(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('skillsCtrl', function ($scope, oResume) {

            var vm = $scope;
            vm.skills = oResume.skills[0];
            //console.log(oResume.skills[0]);
        });

})();