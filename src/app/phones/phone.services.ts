module app.phones {
	'use strict';
	
	import Phone = app.phones.Phone;
	
	interface IPhoneResourceDef extends ng.resource.IResource<app.phones.Phone> {
		
	}
	
	interface IPhoneResource extends ng.resource.IResourceClass<IPhoneResourceDef> {
		
	}
	
	PhoneResource.$inject = ['$resource'];
	
	export function PhoneResource($resource: ng.resource.IResourceService) : IPhoneResource {
		return <IPhoneResource> $resource('phones/:phoneId.json', {}, {
			query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
		});		
	}
}