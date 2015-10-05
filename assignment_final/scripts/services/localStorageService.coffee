# local storage service

angular.module('dataApp') .service 'localStorageService', ->
	@.setData = (data, key) -> 
		localStorage[key] = JSON.stringify data
		return
	@.getData = (key) ->
		return localStorage[key] and JSON.parse localStorage[key]	
	return  