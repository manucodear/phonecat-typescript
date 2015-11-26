describe('phone-list tests', function() {
	
	var fakePhones = [
		    {
				"age": 0,
				"id": "motorola-xoom-with-wi-fi",
				"imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
				"name": "Motorola XOOM\u2122 with Wi-Fi",
				"snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
			},
			{
				"age": 1,
				"id": "motorola-xoom",
				"imageUrl": "img/phones/motorola-xoom.0.jpg",
				"name": "MOTOROLA XOOM\u2122",
				"snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
			}
		];

	beforeEach(angular.mock.module('app.phones', function($provide) {
		var phoneResource = {
			query: function() { return fakePhones; }
		}
		$provide.value('PhoneResource', phoneResource);
	}))
	
	var vm;
	beforeEach(angular.mock.inject(function($controller) {
		vm = $controller('PhoneList');
	}));
	
	it('should create "phones" model with 2 phones fetched from xhr', function() {
		expect(vm.phones).toEqual(fakePhones);
	});
	
	it('should set the default value of orderProp model', function() {
		expect(vm.orderProp).toBe('age');
	});
})