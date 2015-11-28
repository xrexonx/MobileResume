(function () {
    'use strict';

    angular
        .module('AppRoutes')
        .config(function($stateProvider, $urlRouterProvider) {

            var oResolved = {
                oResume : function (Resume) {
                    return Resume.resolveResume();
                }
            }


            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'profileCtrl',
                    resolve:oResolved
                })
                .state('app.view', {
                    url: '/:view',
                    templateUrl: function ($stateParams) {
                        return 'templates/'+$stateParams.view+'.html'
                    },
                    controllerProvider: function($stateParams) {
                        return $stateParams.view + 'Ctrl';
                    },
                    resolve:oResolved
                });

            $urlRouterProvider.otherwise('/app/profile');
        });

})();