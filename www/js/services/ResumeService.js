(function () {
	'use strict';

	angular
		.module('AppServices')
		.service('Resume', function ($q, Http) {

			return {
				get: function (url) {
					return Http.send(url, 'GET')
				},
				resolveResume: function () {
					var deferred = $q.defer();
					this
						.get('rexon.json')
						.success(function (response) {
							if (response) {
								deferred.resolve(response);
							}
						});
					return deferred.promise;
				}
			};

		});

})();