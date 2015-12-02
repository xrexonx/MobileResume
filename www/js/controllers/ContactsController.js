(function() {
    'use strict';

    angular
        .module('AppControllers')
        .controller('contactsCtrl', function ($scope, oResume) {
            var vm = $scope;
            vm.contacts = oResume.basics;
        });

})();
