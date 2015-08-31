var campaignData = '[{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"}]';
var myCampaignData = JSON.parse(campaignData);
var sharedSearchData = '[{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"}]';
var mysharedSearchData = JSON.parse(sharedSearchData);
$(document).ready(function(){
	var tableElem = document.getElementById("mainDataTable");
	var mainTableBodyElem= document.getElementById("mainTableBody");
	var playButtonElems = document.getElementsByClassName("fa-play");
	var editButtonElems = document.getElementsByClassName("fa-pencil");
	var trashButtonElems = document.getElementsByClassName("fa-trash-o");
	var faIconArr = [playButtonElems, editButtonElems, trashButtonElems];
	var inputBoxRows = document.getElementById("mainDataTable").getElementsByTagName('tr');
	var savedTemplateFunc = (function(){
		var htmlTemplate ='<tr class="inputbox-visible-class"> \
		 		<td id="actionCell" class="td-template-class td-first-template"><i id="playButton" class="fa fa-play"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash-o"></i> </td> \
		 		<td id="nameCell" class="td-template-class"><input disabled = "true" id="inputNameCell" type="text" placeholder="Type Here" class="input-table-field"></td> \
		 		<td id="descriptionCell" class="td-template-class td-description-template"><input disabled = "true" id="inputDescriptionCell" type="text" placeholder="Type Here" class="input-table-field"></td> \
		 		<td id="ownerNameCell" class="td-template-class"><input disabled = "true" id="inputOwnerNameCell" type="text" placeholder="Type Here" class="input-table-field"></td> \
		 		<td id="permissionCell" class="td-template-class"><input disabled = "true" id="inputPermissionCell" type="text" placeholder="Type Here" class="input-table-field"></td> \
		 		</tr>';

		var enableTextboxRow = function (rowIndex){
			var inputBox = inputBoxRows[rowIndex-2].getElementsByTagName('input');
			for(var i=0; i<inputBox.length;i++){
				inputBox[i].disabled = '';
			}	
		}

		var htmlTemplateFunc = function(templateData){
			if(tableElem.hasChildNodes()){
				var tdElements=tableElem.getElementsByTagName("tr");
				for(x = tdElements.length - 1; x >= 0; x--){
					tableElem.removeChild(tdElements[x]);
				}
			}
			
			for(var i=0; i<templateData.length ;i++){
				tableElem.insertAdjacentHTML('afterbegin', htmlTemplate);
				document.getElementById('inputNameCell').value = templateData[i].name;
				document.getElementById("inputDescriptionCell").value = templateData[i].description;
				document.getElementById("inputOwnerNameCell").value = templateData[i].ownerName;
				document.getElementById("inputPermissionCell").value = templateData[i].readPermissions;	

				//to be done later for string interpolation
				//str.replace ('', function(m){ return myCampaignData[i][m]})
			}
			for (var i = 0; i <faIconArr.length; i++){
				for(var j=0; j<faIconArr[i].length; j++){
					faIconArr[1][j].addEventListener("click", function(e){
						enableTextboxRow(this.parentNode.parentNode.rowIndex);
					});
				};
			};
		};
		return{
			pushAllSavedData:function(){htmlTemplateFunc(myCampaignData)},
			pushSharedSearchesData:function(){htmlTemplateFunc(mysharedSearchData)}
		};
	})();
	var allSavedElem = document.getElementById("allSaved");
	var sharedSearchesElem = document.getElementById("sharedSearches");
	allSaved.addEventListener("click",function(){savedTemplateFunc.pushAllSavedData()});
	sharedSearchesElem.addEventListener("click",function(){savedTemplateFunc.pushSharedSearchesData()});
	savedTemplateFunc.pushAllSavedData();
});
