describe("mySampleTestSuite", function(){
  var a = 10;
  it("check value of a", function(){
    expect(a).toEqual(10);
  });
});

describe("check javascript functions", function(){
  var initLoad = new onReady();
  beforeEach(function(){
  	spyOn(initLoad, 'initialLoad');
  })
  
  xit("check for return value of basicBoolReturnFunc", function(){
    expect(boolVar).toEqual(true);
  });

  it("checks whether any call made to initialLoad function", function(){
  	initLoad.initialLoad(true);
  	expect(initLoad.initialLoad).toHaveBeenCalled();
  });

  xit("tracks calls to initialLoad function", function(){
  	expect(initLoad.initialLoad).toHaveBeenCalledWith(true);
  })
});
