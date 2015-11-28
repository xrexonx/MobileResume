(function () {
	'use strict';

	angular
		.module('AppServices')
		.service('Resume', function (Http) {

			return {
				get: function (url) {
					return Http.send(url, 'GET')
				}
			};

		});

})();