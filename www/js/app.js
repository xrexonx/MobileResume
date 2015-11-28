(function () {
    'use strict';

    angular
        .module('rexon', ['ionic', 'ionic-material', 'AppRoutes', 'AppControllers', 'AppServices'])

        .run(function ($ionicPlatform) {

            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

    //Define sub modules
    angular.module('AppRoutes', ['ui.router']);
    angular.module('AppServices', []);
    angular.module('AppControllers', []);

})();
