
var assService = {
    getData: function(){
        var promise = $.getJSON('app/json/data.json');
        return promise;
    }
}


var AppModel = function(data){
    this.items = data || [];

    this.name = [];
    this.des = [];
    this.ownName = [];
    this.readPer = [];
 }

 AppModel.prototype = {
    setItem: function(item){
        this.items.push(item)
    },
    setItems: function(items){
        for (var i = 0; items.length>i; i++) {
            this.setItem(items[i])
        };
    },
    getItems: function(){
        return this.items
    },
    setColData: function(name, des){
        var _items = this.getItems()
       for(key in _items){
            this.name.push(_items[key].name)
            this.des.push(_items[key].description)
            this.ownName.push(_items[key].ownerName)
            this.readPer.push(_items[key].readPermissions)
       }
    }
 }

var AppView = function(model, elements){
    this.model = model;
    this.elements = elements;
    var that = this;
}

AppView.prototype = {
    show: function(){
        this.rebuildList()
    },
    rebuildList: function(){
        this.model.setColData('sdfsdf', 'rrrrr')
        var nameObj = this.model.name,
            desObj = this.model.des,
            ownNameObj = this.model.ownName,
            readPerObj = this.model.readPer;

        var dataCol = this.elements.colName,
            colDes = this.elements.colDes,
            colOwner = this.elements.colOwner,
            colPerm = this.elements.colPerm,
            actionCol = this.elements.actionCol;

         
        var htmlAction = '<div class="cell">\
                        <a href="#"><i class="glyphicon glyphicon-play"></i></a>\
                        <a href="#"><i class="glyphicon glyphicon-pencil"></i></a>\
                        <a href="#"><i class="glyphicon glyphicon-trash"></i></a>\
                    </div>'


        for(var i in nameObj){
            dataCol.append('<div class="cell data-cell">\
                '+nameObj[i]+'\
                </div>');
            actionCol.append(htmlAction)
        }
        for(var i in desObj){
            colDes.append('<div class="cell data-cell">\
                '+desObj[i]+'\
                </div>')
        }

        for(var i in ownNameObj){
            colOwner.append('<div class="cell data-cell">\
                '+ownNameObj[i]+'\
                </div>')
        }

        for(var i in readPerObj){
            colPerm.append('<div class="cell data-cell">\
                '+readPerObj[i]+'\
                </div>')
        }
      
        
    }
}

var AppController = function(){

}

var model,
    view;
assService.getData().then(function(data){
    model = new AppModel(data);
    veiw = new AppView(model, {
        'dataTable': $('.data-table'),
        'tbody': $('.tbody'),
        'actionCol': $('.action-col'),
        'colName': $('.data-table .col-name'),
        'colDes': $('.data-table .col-des'),
        'colOwner': $('.data-table .col-owner'),
        'colPerm': $('.data-table .col-perm'),
        'cell': $('.data-table .data-cell')
    });

    veiw.show()
    
})