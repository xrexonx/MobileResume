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
                    controller: 'AppCtrl'
                })
                .state('app.view', {
                    url: '/:view',
                    views: {
                        'menuContent': {
                            templateUrl: function ($stateParams) {
                                return 'templates/'+$stateParams.view+'.html'
                            },
                            controller: 'AppCtrl'
                            //controllerProvider: function($stateParams) {
                            //    return $stateParams.view + 'Controller';
                            //},
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/profile');
        });

})();