
var assService = {
    getData: function(){
        return $.getJSON('app/json/data.json');;
    }
}


var AppModel = function(data){
    this.items = data || [];

    this.columnsHdr = ['Action','Name', 'Description', 'Owner Name', 'Read Permissions']
    this.columnsData = {
        'action': [],
        'name': [],
        'description': [],
        'ownerName': [],
        'readPermissions':[]
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
        if(this.columnsData.description){
            this.columnsData.description = []
        }
        if(this.columnsData.ownerName){
            this.columnsData.ownerName = []
        }
        if(this.columnsData.readPermissions){
            this.columnsData.readPermissions = []
        }

       for(key in _items){
            if(this.columnsData.action){
                this.columnsData.action.push(key)
            }
            if(this.columnsData.name){
                this.columnsData.name.push(_items[key].name)
            }
            if(this.columnsData.description){

                this.columnsData.description.push(_items[key].description)
           }
            if(this.columnsData.ownerName){
                this.columnsData.ownerName.push(_items[key].ownerName)
            }
            if(this.columnsData.readPermissions){
                this.columnsData.readPermissions.push(_items[key].readPermissions)
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
            colDes = this.elements.colDes,
            id = -1;

            tbody.html('');
        var htmlAction = '<div class="cell">\
                        <a href="#"><i class="glyphicon glyphicon-play"></i></a>\
                        <a href="#" class="edit"><i class="glyphicon glyphicon-pencil"></i></a>\
                        <a href="#" class="delete"><i class="glyphicon glyphicon-trash"></i></a>\
                        <button type="button" class="update-btn disable">Update</button>\
                    </div>'
        
        for(var j in this.model.columnsData){
             id++
             tbody.append('<div class="col col-des">\
                         <div class="cell sorting">'+this.model.columnsHdr[id]+'</div>\
                         <div class="cell input-cell"><input type="text" name="name" placeholder="Type Here"></div>\
                     </div>');

            var inputName = j;
            for(var i in this.model.columnsData[j]){
                if(id==0){
                    // for action column
                    tbody.find(colDes).eq(id).append(htmlAction)
                }else{
                    // for data column
                    tbody.find(colDes).eq(id).append('<div class="cell">\
                        <span class="content">'+this.model.columnsData[j][i]+'</span> \
                        <input type="text" class="input edit-input" name="'+inputName+'" value="'+this.model.columnsData[j][i]+'">\
                    </div>')
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

    this.elements.tabNavi.click(function(){
        that.clickOnTab(this)
    });

    $(document).on('click',this.elements.edit, function(){
        that.editClick($(this), that.view)
    });

    $(document).on('keyup',this.elements.editInput, function(){
        that.inputKeyUp($(this))
    });

    $(document).on('click',this.elements.del, function(){
        that.delRow($(this), that.view)
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

            currenColumn = currentInput.attr('name')

        this.model.getItems()[currentCellId-2][currenColumn] = value;
       
    },
    editClick: function(currentEdit, view){
        
        var currentId = (currentEdit.parent().index()-1),
            updateBtn = this.elements.updateBtn,
            colDes = this.elements.colDes,
            cell = this.elements.cell,
            allItems = this.model.getItems();

        $(updateBtn).eq(currentId-1).removeClass('disable') 
        $(colDes).each(function(i){
            $(this).find(cell).eq(currentId+1).addClass('active')
        })
    },
    delRow: function(currentDel, view){
       var currentDelId = currentDel.parent().index()-2;
       this.model.getItems().splice(currentDelId, 1);
       view.show()
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

    controller = new AppController(veiw);
    veiw.show();
    
});
