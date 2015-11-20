module app.phones {
	'use strict';
	
	import Phone = app.phones.Phone;
	
	interface IPhoneListScope {
		phones: Phone[];
		orderProp: string;
	}
	
	export class PhoneList implements IPhoneListScope {
		phones: Phone[];
		orderProp: string;
		
		static $inject = ['PhoneResource'];
		
		constructor(PhoneResource: any) {
			this.phones = PhoneResource.query();
			this.orderProp = 'age'
		}	
	}
}