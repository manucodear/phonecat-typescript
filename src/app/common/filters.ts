module app.common {
	'use stricts';
	export function checkmarkFilter() {
		return (input) => {
			return input ? '\u2713' : '\u2718';
		}
	}
	
	angular.module('app.common.filters', [])
		.filter('checkmark', checkmarkFilter);
}