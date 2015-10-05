(function(){
	'use strict';

	describe('service: localStorageService',function(){
		var service;
		beforeEach(module('dataApp'));
		
		beforeEach(inject(function(localStorageService) {
		  service = localStorageService;
		}));
		
		it('service should be loaded', function(){
			expect(service).toBeDefined();
		});	
		
		it('setData: should set data in local storage per specified key when called', function(){
			var key = 'sampleData',
				data = [{"name":"jhgkh","score":"1235"}];
			service.setData(data, key);
			expect(localStorage[key]).toEqual('[{"name":"jhgkh","score":"1235"}]');
		});
	});
	
})();

