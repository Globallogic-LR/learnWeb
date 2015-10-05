angular.module('dataApp') .controller 'mainController', ($scope, appService, localStorageService) ->
	# assignment
	$scope.option = {
		edit_enable : {}
	}
	$scope.student = {}
	$scope.failPercentage = 65
	$scope.studentData = appService.initDescriptionData 'studentData'
 
	$scope.deleteRow = (i) ->
		$scope.studentData.splice i,1
		localStorageService.setData $scope.studentData, 'studentData'
		return
 
	$scope.editRow = (i) ->
		$scope.option.edit_enable[i] = not $scope.option.edit_enable[i]
		return
  
	$scope.showSummary = ->
		appService.fetchSummaryData $scope.studentData

	$scope.saveData = (name, score, action, index) ->
		if (name and name.trim().length) and (score and score.trim().length)
			student_data = {
				name: name
				score: score
			}
			if index? and action is 'edit'
				$scope.studentData[index] = student_data 
			else 
				$scope.studentData.push student_data
			
			localStorageService.setData $scope.studentData, 'studentData'
			return

	$scope.keyupAction = (event, index, name, score) ->
		if event.keyCode is 13
			$scope.saveData name, score, 'edit', index
			$scope.option.edit_enable[index] = not $scope.option.edit_enable[index]
   
		return
	return