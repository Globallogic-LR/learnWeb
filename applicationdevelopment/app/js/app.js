
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

    this.columnsHdr = ['Action','Name', 'Description', 'Owner Name', 'Read Permissions']

    this.columnsData = {
        'action': [],
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

        // empty columns
        if(this.columnsData.action){
            this.columnsData.action = []
        }
        if(this.columnsData.name){
            this.columnsData.name = []
        }
        if(this.columnsData.des){
            this.columnsData.des = []
        }
        if(this.columnsData.ownName){
            this.columnsData.ownName = []
        }
        if(this.columnsData.readPer){
            this.columnsData.readPer = []
        }



       for(key in _items){
            if(this.columnsData.action){
                this.columnsData.action.push(key)
            }
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

            tbody.html('')
        var   htmlAction = '<div class="cell">\
                        <a href="#"><i class="glyphicon glyphicon-play"></i></a>\
                        <a href="#" class="edit"><i class="glyphicon glyphicon-pencil"></i></a>\
                        <a href="#" class="delete"><i class="glyphicon glyphicon-trash"></i></a>\
                        <button type="button" class="update-btn disable">Update</button>\
                    </div>'


        
        var id = -1;
        for(var j in this.model.columnsData){
             id++

             tbody.append('<div class="col col-des">\
                         <div class="cell sorting">'+this.model.columnsHdr[id]+'</div>\
                         <div class="cell input-cell"><input type="text" name="name" placeholder="Type Here"></div>\
                     </div>');


            for(var i in this.model.columnsData[j]){
                if(id==0){
                    // for action column
                    tbody.find(colDes).eq(id).append(htmlAction)
                }else{
                    // for data column
                    tbody.find(colDes).eq(id).append('<div class="cell"><span class="content">'+this.model.columnsData[j][i]+'</span> <input type="text" class="input edit-input" value="'+this.model.columnsData[j][i]+'"></div>')
                }


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

    $(document).on('keyup',this.elements.editInput, function(){
        that.inputKeyUp($(this))
    });

    $(document).on('click',this.elements.updateBtn, function(){
        that.updateRow(that.view)
    });


}

AppController.prototype = {
    clickOnTab: function(evt){
       var currentTab = $(evt).data('id'),
            tabNavi = this.elements.tabNavi,
            tabContent = this.elements.tabContent
       // Add and Remove class on tab
       
       tabNavi.parents('ul').find('li').removeClass('active')
       $(this).parent().addClass('active')

       // // Add and Remove class on tab content
       tabContent.removeClass('active');
       $('#'+currentTab+'').addClass('active')
    },
    inputKeyUp: function(currentInput){
        var value = currentInput.val(),
            currentColumnId = currentInput.parents('.col-des').index(),
            currentCellId = currentInput.parent().index()

        // console.log(currentInput.parents('.col-des').index())

        // this.model.getItems()[currentCellId-2].name = value
        // this.model.getItems()[currentCellId-2].des = value
        
        for(var val in this.model.columnsData){

            console.log(val)
        }
        
        

       
    },
    editClick: function(currentEdit, view){
        
        var currentId = (currentEdit.parent().index()-1),
            updateBtn = this.elements.updateBtn,
            colDes = this.elements.colDes,
            cell = this.elements.cell,
            allItems = this.model.getItems();

        $(updateBtn).eq(currentId-1).removeClass('disable')

        // this.model.getItems()[currentId-1].name = 'sdfdssdf';
        
       
        $(colDes).each(function(i){
            $(this).find(cell).eq(currentId+1).addClass('active')
        })
    },

    updateRow: function(view){

        view.show()        
       
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
        'del': '.delete',
        'updateBtn' : '.update-btn'

    });

    controller = new AppController(veiw)

    // model.setColData()
    veiw.show()
    
})