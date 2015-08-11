


var items = []



var AppModel = function(items){
	this.items = [];
	
}

AppModel.prototype = {

	getData: function(){
        var promise = $.getJSON('app/json/data.json' , function(data) {})
        return promise
    },
    setItems: function(){
    	var that = this;

    	model.getData().then(function(data){
    		that.items.push(data.tableData)
		})
    },
    getItems: function(){
    	this.setItems();
    	return (this.items)
    }
}



var AppView = function(){

}

var AppController = function(){

}


var model = new AppModel('items')

