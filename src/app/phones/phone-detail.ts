module app.phones {
	'use strict';
	
	import Phone = app.phones.Phone;
	
	interface IPhoneDetailScope {
		phone: Object;
		mainImageUrl: string;
		setImage(imageUrl: string): void;
	}
	
	interface IRouteParams extends ng.route.IRouteParamsService {
		phoneId: string;
	}
	
	export class PhoneDetail implements IPhoneDetailScope {
		phone: Object;
		mainImageUrl: string;
		
		static $inject = ['$routeParams', 'PhoneResource'];
		
		constructor($routeParams: IRouteParams, PhoneResource: any) {
			this.phone = PhoneResource.get({phoneId: $routeParams.phoneId}, (data)=> {
				this.setImage(data.images[0]);
			});
		}
		
		setImage(imageUrl: string): void {
			this.mainImageUrl = imageUrl;	
		}
	}
}