var updateBtnId = null;

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
    show: function(activeTab){
        this.rebuildList(activeTab)
    },
    rebuildList: function(activeTab){
        this.model.setColData()

        // All elements
       
        var 
            contentWrapper = this.elements.contentWrapper,
            tbody = this.elements.tbody,
            actionCol = this.elements.actionCol,
            colDes = this.elements.colDes,
            cell = this.elements.cell,
            id = -1;

         
            currentTabHtml = $('#'+activeTab.data('id')+'').html();    

            contentWrapper.find(tbody).html('');
            contentWrapper.html(currentTabHtml)


        var htmlAction = '<div class="cell">\
                        <a href="#"><i class="glyphicon glyphicon-play"></i></a>\
                        <a href="#" class="edit"><i class="glyphicon glyphicon-pencil"></i></a>\
                        <a href="#" class="delete"><i class="glyphicon glyphicon-trash"></i></a>\
                        <button type="button" class="update-btn disable">Update</button>\
                    </div>'
        
        for(var j in this.model.columnsData){
             id++

             contentWrapper.find(tbody).append('<div class="col col-des">\
                         <div class="cell sorting">'+this.model.columnsHdr[id]+'</div>\
                         <div class="cell input-cell"><input type="text" name="name" placeholder="Type Here"></div>\
                     </div>');

            var inputName = j;
            for(var i in this.model.columnsData[j]){
                if(id==0){
                    // for action column
                    contentWrapper.find(tbody).find(colDes).eq(id).append(htmlAction)
                }else{
                    // for data column
                    contentWrapper.find(tbody).find(colDes).eq(id).append('<div class="cell">\
                        <span class="content">'+this.model.columnsData[j][i]+'</span> \
                        <input type="text" class="input edit-input" name="'+inputName+'" value="'+this.model.columnsData[j][i]+'">\
                    </div>')
                }

            }
        }

        // currentUpdate.parent().index()-2
        // currentId

        // var updateBtn = this.elements.updateBtn
        // console.log(updateBtnId)
        
    }
}



var AppController = function(view){
    this.model = view.model;
    this.elements = view.elements;
    this.view = view;
    var that = this;

    this.elements.tabNavi.click(function(){
        that.clickOnTab(this, that.view)
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
        that.updateRow($(this), that.view)
        
    });
}


AppController.prototype = {
    clickOnTab: function(evt, view){

       var tabNavi = this.elements.tabNavi

       // Add and Remove class on tab
       
       tabNavi.parents('ul').find('li').removeClass('active')
       $(evt).parent().addClass('active')

       view.show($(evt))

    },
    inputKeyUp: function(currentInput){
        var value = currentInput.val(),
            currentCellId = currentInput.parent().index()

            currenColumn = currentInput.attr('name')

        this.model.getItems()[currentCellId-2][currenColumn] = value;
       
    },
    editClick: function(currentEdit, view){
        
        var currentId = (currentEdit.parent().index()-1),
            updateBtn = this.elements.updateBtn,
            colDes = this.elements.colDes,
            cell = this.elements.cell;


        $(updateBtn).eq(currentId-1).removeClass('disable') 
        
        $(colDes).each(function(i){
            $(this).find(cell).eq(currentId+1).addClass('active')
        })

    },
    delRow: function(currentDel, view){
        var currentDelId = currentDel.parent().index()-2,
            activeNavi = view.elements.activeNavi


        this.model.getItems().splice(currentDelId, 1);
        view.show(activeNavi)
    },
    updateRow: function(currentUpdate, view){
        var activeNavi = view.elements.activeNavi        
        view.show(activeNavi)

        //updateBtnId = currentUpdate.parent().index()-2
        
    }

}



var model,
    view;
assService.getData().then(function(data){
    model = new AppModel(data);
    veiw = new AppView(model, {
        'contentWrapper': $('.content-wrapper'),
        'dataTable': $('.data-table'),
        'tbody': '.data-table .tbody',
        'actionCol': $('.action-col'),
        'colDes': '.col-des',
        'cell': '.cell',
        'editInput' : '.edit-input',

        'activeNavi' : $('.tab-navi li.active a'),
        'tabNavi' : $('.tab-navi li a'),
        'tabContent': $('.tab-content'),

        'edit': '.edit',
        'del': '.delete',
        'updateBtn' : '.update-btn'

    });

    controller = new AppController(veiw);
    veiw.show($('.tab-navi li.active a'));
    
});
