# app service

angular.module('dataApp') .service 'appService', (localStorageService) ->
	@.fetchSummaryData = (data) ->
		# assignment
		sum = 0
		tempArr = []
		dataObj = {
			minScore : 0
			maxScore : 0
			avgScore : 0   
		}
		if data.length
			for i in data
				sum += parseInt i.score
				tempArr.push parseInt(i.score)
			dataObj = {
				minScore: Math.min.apply Math, tempArr
				maxScore: Math.max.apply Math, tempArr
				avgScore: sum/data.length
			}
		return dataObj
	@.initDescriptionData = (key) ->
		if localStorageService.getData(key)? 
			return localStorageService.getData(key)
		else
			[]
	return