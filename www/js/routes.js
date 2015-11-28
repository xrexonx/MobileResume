(function () {
    'use strict';

    angular
        .module('AppRoutes')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'profileCtrl'
                })
                .state('app.view', {
                    url: '/:view',
                    templateUrl: function ($stateParams) {
                        return 'templates/'+$stateParams.view+'.html'
                    },
                    controllerProvider: function($stateParams) {
                        return $stateParams.view + 'Ctrl';
                    }
                });

            $urlRouterProvider.otherwise('/app/profile');
        });

})();