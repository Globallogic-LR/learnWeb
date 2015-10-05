# Application Bootstrap

angular.module 'dataApp',[]
angular.element(document) .ready -> 
	angular.bootstrap document, ['dataApp']
	return