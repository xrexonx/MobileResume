(function () {
    'use strict';

    angular
        .module('AppFilters')
        .filter('getFirstName', function() {
            return function(input) {
                return input.split(' ')[0];
            };
        });

})();