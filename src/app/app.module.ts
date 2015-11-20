/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="phones/phone.module.ts"/>
module app {
	'use strict';
	angular.module('app', [
		'ngRoute',
		'app.common.filters',
		'app.phones'
		])
		.config(appConfig);
		
	appConfig.$inject = ['$routeProvider'];
	function appConfig($routeProvider) {
		$routeProvider
			.when('/phones', {
				templateUrl: 'app/phones/phone-list.html',
				controller: 'PhoneList',
				controllerAs: 'vm'
			})
			.when('/phones/:phoneId', {
				templateUrl: 'app/phones/phone-detail.html',
				controller: 'PhoneDetail',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/phones'
			});
	}
};