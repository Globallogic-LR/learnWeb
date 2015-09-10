describe('studentService', function () {
  var studentService;
  beforeEach(module('myApp'));
  beforeEach(inject(function (_studentService_) {
    studentService = _studentService_;
  }));

  describe('testing student service', function () {

    it('should test students data and performance data to not to equal null', function () {
      expect(studentService.studentsData).to.not.equal(null);
      expect(studentService.performaceData).to.not.equal(null);
    });

    it('should add student to students list', function () {
      studentService.studentsData = [];
      studentService.addStudentData({'name':'test1','score':80});
      var addedStudent = studentService.studentsData[studentService.studentsData.length-1];
      expect(addedStudent).to.eql({'name':'test1','score':80});
    });

    it('should remove student from students list', function () {
       studentService.studentsData = [{'name':'test1','score':80}, {'name':'test2','score':60}];
       studentService.removeStudent(1);
       expect(studentService.studentsData).to.eql([{'name':'test1','score':80}]);
    });

    it('should update student data', function () {
      studentService.studentsData = [{'name':'test2','score':60}];
      studentService.updateStudent();
      var updatedData = JSON.parse(localStorage.getItem('studentsData'));
      expect(updatedData).to.eql([{'name':'test2','score':60}]);
    });

  });
});