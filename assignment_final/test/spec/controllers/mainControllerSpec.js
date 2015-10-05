(function(){
	'use strict';

	describe('controller: mainController',function(){
		beforeEach(module('dataApp'));
		
		var _ctrl, _scope, _appService, _localStorageService;
		beforeEach(inject(function($controller, $rootScope, appService, localStorageService) {
			_scope = $rootScope.$new();
			_appService = appService;
			_localStorageService = localStorageService;
			_ctrl = $controller('mainController', {
				$scope: _scope,
				appService: _appService,
				localStorageService: localStorageService
			});
		}));
		
		it('controller should start with some default values', function(){
			expect(_scope.failPercentage).toBe(65);
			expect(_scope.student).toEqual({});
			expect(_scope.option).toEqual({edit_enable: {}});
		});
		
		it('editRow: should edit the row when called', function(){
			_scope.editRow(1);
			expect(_scope.option.edit_enable[1]).toBe(true);
		});
		
		it('deleteRow: should delete the row when called', function(){
			localStorage.clear();
			_scope.studentData = [
				{ name :'diljohn',  score: 100}, 
				{ name: 'harinder singh',  score: 200}
			]; 
			_scope.deleteRow(1);
			expect(_scope.studentData).toEqual([{name :'diljohn',  score: 100}]);
		});
		
		it('showSummary: should fetch summary data when called',function(){
			_scope.studentData = [
				{ name :'diljohn',  score: 100}, 
				{ name: 'harinder singh',  score: 200} 
			]; 
			expect(_scope.showSummary().maxScore).toBe(200);
			expect(_scope.showSummary().minScore).toBe(100);
			expect(_scope.showSummary().avgScore).toBe(150);
		});
		
		it('saveData: should save student data when called', function(){
			localStorage.clear();
			_scope.saveData('diljohn', '300');
			expect(localStorage['studentData']).toEqual('[{"name":"diljohn","score":100},{"name":"diljohn","score":"300"}]');
		});
		
		it('keyupAction: ', function(){
			var event = {
				keyCode : 13 
			};
			_scope.keyupAction(event, 1, 'harinder', '200');
			expect(localStorage['studentData']).toEqual('[{"name":"diljohn","score":100},{"name":"harinder","score":"200"}]');
		});
		
	});
	
})();