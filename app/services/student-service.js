angular.module('myApp')
	.factory('studentService', function() {
		
		var studentService = {};
		studentService.studentsData = localStorage.getItem('studentsData') ? JSON.parse(localStorage.getItem('studentsData')) : [];
		studentService.performaceData = {};
		updatePerformanceData();
		
		
		studentService.addStudentData = function(student){
			studentService.studentsData.push(student);
			updateLocalStorage(studentService.studentsData);
			updatePerformanceData();
		};

		studentService.removeStudent = function(index){
			studentService.studentsData.splice(index,1);
			updateLocalStorage(studentService.studentsData);
			updatePerformanceData();
		};

		studentService.updateStudent = function(){
			updateLocalStorage(studentService.studentsData);
			updatePerformanceData();
		};

		function updateLocalStorage(studentsData){
			localStorage.setItem('studentsData',JSON.stringify(studentsData));
		}

		function updatePerformanceData(){
			studentService.performanceData = getPerformance(studentService.studentsData);
		}

		function getPerformance(studentsData){
			var performaceData = {}, totalScore = 0, studentsCount = studentsData.length, averageScore, minScore, maxScore;
			if(studentsData.length!=0){
				minScore = studentsData[0].score;
				maxScore = studentsData[0].score;
				for(var i=0; i<studentsCount; i++){
					totalScore += studentsData[i].score;
					minScore = studentsData[i].score < minScore ? studentsData[i].score : minScore;
					maxScore =  studentsData[i].score > maxScore ? studentsData[i].score : maxScore;
				}
				averageScore = (totalScore / studentsCount).toFixed(2);
				performaceData.minScore = minScore;
				performaceData.maxScore = maxScore;
				performaceData.averageScore = averageScore;
			}
			return performaceData;
		}

		return studentService;
});