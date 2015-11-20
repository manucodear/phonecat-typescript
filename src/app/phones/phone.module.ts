/// <reference path="../common/filters.ts"/>
/// <reference path="phone-list.ts"/>
/// <reference path="phone-detail.ts"/>
/// <reference path="phone.model.ts"/>
/// <reference path="phone.animations.ts"/>
/// <reference path="phone.services.ts"/>
module app.phones {
	angular.module('app.phones', ['ngAnimate', 'ngResource'])
			.controller('PhoneList', PhoneList)
			.controller('PhoneDetail', PhoneDetail)
			.filter('CheckmarkFilter', app.common.checkmarkFilter)
			.animation('.phone', PhoneAnimation)
			.factory('PhoneResource', PhoneResource);
}