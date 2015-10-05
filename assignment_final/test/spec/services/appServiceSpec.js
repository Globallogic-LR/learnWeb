(function(){
	'use strict';

	describe('service: appService',function(){
		var _appservice,
			_localStorageService;
		beforeEach(module('dataApp'));
		
		beforeEach(inject(function(appService, localStorageService) {
		  _appservice = appService;
		  _localStorageService = localStorageService	  
		}));
		
		it('service should be loaded', function(){
			expect(_appservice).toBeDefined();
		});
		
		it('fetchSummaryData: should return summary data when called', function(){
			var data = [
				{ score: 10 },
				{ score: 20 },
				{ score: 30 }
			];
			expect(_appservice.fetchSummaryData(data).minScore).toBe(10);	
			expect(_appservice.fetchSummaryData(data).avgScore).toBe(20);	
			expect(_appservice.fetchSummaryData(data).maxScore).toBe(30);			
		});
		
		it('initDescriptionData: should init the summary data when called', function(){
			localStorage.clear();
			expect(_appservice.initDescriptionData('studentData')).toEqual([]);
		});
		
	});
	
})();

