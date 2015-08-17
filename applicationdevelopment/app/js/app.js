
var assService = {
    getData: function(){
        return $.getJSON('app/json/data.json');;
    }
}


var AppModel = function(data){
    this.items = data || [];

    // this.name = [];
    // this.des = [];
    // this.ownName = [];
    // this.readPer = [];

    this.columnsHdr = ['Name', 'Description', 'Owner Name', 'Read Permissions']
    this.columnsData = {
        'name': [],
        'des': [],
        'ownName': [],
        'readPer':[]
    } 
    
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
            
            if(this.columnsData.name){
                this.columnsData.name.push(_items[key].name)
            }
            if(this.columnsData.des){

                this.columnsData.des.push(_items[key].description)
           }
            if(this.columnsData.ownName){
                this.columnsData.ownName.push(_items[key].ownerName)
            }
            if(this.columnsData.readPer){
                this.columnsData.readPer.push(_items[key].readPermissions)
            }
            
       }
    }
 }

var AppView = function(model, elements){
    this.model = model;
    this.elements = elements;
}

AppView.prototype = {
    show: function(){
        this.rebuildList()
    },
    rebuildList: function(){
        this.model.setColData()

        // All elements
        var tbody = this.elements.tbody,
            actionCol = this.elements.actionCol,
            colDes = this.elements.colDes;

        var   htmlAction = '<div class="cell">\
                        <a href="#"><i class="glyphicon glyphicon-play"></i></a>\
                        <a href="#" class="edit"><i class="glyphicon glyphicon-pencil"></i></a>\
                        <a href="#" class="delete"><i class="glyphicon glyphicon-trash"></i></a>\
                    </div>'


        var id = -1;

        for(var j in this.model.columnsData){
             id++
             tbody.append('<div class="col col-des">\
                         <div class="cell sorting">'+this.model.columnsHdr[id]+'</div>\
                         <div class="cell input-cell"><input type="text" name="name" placeholder="Type Here"></div>\
                     </div>');


            for(var i in this.model.columnsData[j]){
                actionCol.eq(id).append(htmlAction)
                tbody.find(colDes).eq(id).append('<div class="cell"><span class="content">'+this.model.columnsData[j][i]+'</span> <input type="text" class="input edit-input" value="'+this.model.columnsData[j][i]+'"></div>')
            }
        }
        
    }
}



var AppController = function(view){
    this.model = view.model;
    this.elements = view.elements;
    this.view = view;
    var that = this;

    // this.elements.tabNavi.click(that.clickOn) through this way unable to access model

    this.elements.tabNavi.click(function(){
        that.clickOnTab(this)
    });
    



    $(document).on('click',this.elements.edit, function(){
        that.editClick($(this), that.view)
    });
}

AppController.prototype = {
    clickOnTab: function(evt){
       var currentTab = $(evt).data('id');
       // Add and Remove class on tab
       
       this.elements.tabNavi.parents('ul').find('li').removeClass('active')
       $(this).parent().addClass('active')

       // // Add and Remove class on tab content
       this.elements.tabContent.removeClass('active');
       $('#'+currentTab+'').addClass('active')
    },
    editClick: function(currentEdit, view){
        var currentId = currentEdit.parent().index()
        var allItems = this.model.getItems();

        console.log(allItems[currentId-1])
        //allItems[currentId-1].name = '0000'
        
        //view.show()

        var that = this;
        
        $(this.elements.colDes).each(function(i){
            $(this).find(that.elements.cell).eq(currentId+1).addClass('active')
        })
    }
    


}







var model,
    view;
assService.getData().then(function(data){
    model = new AppModel(data);
    veiw = new AppView(model, {
        'dataTable': $('.data-table'),
        'tbody': $('.data-table .tbody'),
        'actionCol': $('.action-col'),
        'colDes': '.col-des',
        'cell': '.cell',
        'editInput' : '.edit-input',

        'tabNavi' : $('.tab-navi li a'),
        'tabContent': $('.tab-content'),

        'edit': '.edit',
        'del': '.delete'

    });

    controller = new AppController(veiw)

    veiw.show()
    
})