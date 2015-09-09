angular.module('myApp')
.controller('studentCtrl', ['$scope','studentService', function($scope, studentService) {

  init();

  $scope.addStudent = function(form){
    var isUnique =  isNameUnique($scope.student.name);
    if(form.$valid && isNameUnique($scope.student.name)){
  		studentService.addStudentData($scope.student);
  		init();
      resetForm(form);
  	}
  };

  $scope.removeStudent = function(index){
  	studentService.removeStudent(index);
    init();
  };

  $scope.updateStudentData = function(event, value, form){
  	if(event.keyCode==13 && form.$valid){
  		studentService.updateStudent();
      init();
  	}
  };

  $scope.updateStudentOnBlur = function(value, form){
    if(form.$valid){
      studentService.updateStudent();
      init();
    }
  };

  function resetForm(form){
    form.$setPristine();
    form.$setUntouched();
  }

  function isNameUnique(name){
    for(var i=0;i<$scope.students.length;i++){
      if($scope.students[i].name == name){
        return false;
      }
    }
    return true;
  }

  function init(){
    $scope.students = studentService.studentsData;
    $scope.performanceData = studentService.performanceData;
  	$scope.student = {};
  }

}]);