describe('studentController', function () {

  var studentService, controller, scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_studentService_, $controller, $rootScope) {
    studentService = _studentService_;
    scope = $rootScope.$new();
    controller = $controller('studentCtrl', {
      $scope: scope,
      studentService : studentService
    });
  }));

  it('should test students and performance data not to equal null', function () {
    expect(scope.students).to.not.equal(null);
    expect(scope.performanceData).to.not.equal(null);
    expect(scope.student).to.not.equal(null);
  });

  it('should add student to students list', function () {
    scope.students = [];
    scope.addStudent(false);
    expect(scope.students).to.eql([]);
    scope.student = {'name':'newStudent','score':85};
    scope.addStudent(true);
    expect(scope.students.length).to.not.equal(null);
  });

  it('should remove student from students list', function () {
    studentService.studentsData = [{'name':'test1','score':80},{'name':'test2','score':90}];
    scope.removeStudent(0);
    expect(scope.students).to.eql([{'name':'test2','score':90}]);
  });

  it('should update student data', function () {
    studentService.studentsData = [{'name':'test1','score':80},{'name':'test2','score':90}];
    var e = {'keyCode':13};
    var form = {'$valid': true};
    scope.updateStudentData(e,'test1', form);
    var studentsData = JSON.parse(localStorage.getItem('studentsData'));
    expect(studentsData).to.eql([{'name':'test1','score':80},{'name':'test2','score':90}]);
    expect(studentService.performanceData).to.eql({'minScore':80,'maxScore':90,'averageScore':'85.00'});
  });

});