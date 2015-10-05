(function(){
	'use strict';
	
	angular.module('dataApp').service('appService',function(localStorageService){
		this.fetchSummaryData = function(data){
			var sum = 0,
				tempArr = [],
				dataObj = {
					minScore : 0,
					maxScore : 0,
					avgScore : 0
				};
			
			if(data.length)
			{
				for(var i = 0; i < data.length;i++){
					sum = sum + parseInt(data[i].score);
					tempArr.push(parseInt(data[i].score));
				}
				
				dataObj = {
					minScore : Math.min.apply(Math, tempArr),
					maxScore : Math.max.apply(Math, tempArr),
					avgScore : sum/data.length
				}		
			}
			return dataObj; 
		};
		
		this.initDescriptionData = function(key){
			return typeof localStorageService.getData(key) !== "undefined" ? localStorageService.getData(key) : [];
		};	
	});
})();