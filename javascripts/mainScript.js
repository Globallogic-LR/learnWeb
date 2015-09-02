//var myCampaignData = JSON.parse(campaignData);
//var mySharedSearchData = JSON.parse(sharedSearchData);
var myCampaignData = JSON.parse(sessionStorage.getItem("localCampaignData"));
var mySharedSearchData = JSON.parse(sessionStorage.getItem("localSharedSearchData"));
console.log(myCampaignData,mySharedSearchData);
if(!myCampaignData){
	console.log("outside");
	var campaignData = '[{"name":"Campaign Name", "description":" Description", "ownerName":"Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"}]';
	sessionStorage.setItem("localCampaignData",campaignData);
	myCampaignData = JSON.parse(campaignData);
}
if(!mySharedSearchData){
	console.log("shared outside");
	var sharedSearchData = '[{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"}]';
	sessionStorage.setItem("localSharedSearchData",sharedSearchData);
	mySharedSearchData = JSON.parse(sharedSearchData);
}
$(document).ready(function(){
	var tableElem = document.getElementById("mainDataTable");
	var mainTableBodyElem= document.getElementById("mainTableBody");
	var inputBoxRows = document.getElementById("mainDataTable").getElementsByTagName('tr');
	var savedTemplateFunc = (function(){
		var htmlTemplate ='<tr class="inputbox-visible-class"> \
		 		<td id="actionCell" class="td-template-class td-first-template"><i id="playButton" class="fa fa-play"></i> <i id="editButton" class="fa fa-pencil"></i> <i class="fa fa-trash-o"></i> </td> \
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

		var saveRowData = function (templateDataName, templateData, rowIndex){
			var inputBox = inputBoxRows[rowIndex-2].getElementsByTagName('input');
			templateData[rowIndex-2].name = inputBox[0].value;
			templateData[rowIndex-2].description = inputBox[1].value;
			templateData[rowIndex-2].ownerName = inputBox[2].value;
			templateData[rowIndex-2].readPermissions = inputBox[3].value;
			
			if(templateDataName == "myCampaignData"){
				sessionStorage.setItem("localCampaignData",JSON.stringify(templateData));
			}
			if(templateDataName == "mySharedSearchData"){
				sessionStorage.setItem("localSharedSearchData",JSON.stringify(templateData));
			}
			for(var i=0; i<inputBox.length;i++){
				inputBox[i].disabled = 'disabled';
			}
		}

		var htmlTemplateFunc = function(templateData, templateDataName){
			if(tableElem.hasChildNodes()){
				var tdElements=tableElem.getElementsByTagName("tr");
				for(x = tdElements.length - 1; x >= 0; x--){
					tableElem.removeChild(tdElements[x]);
				}
			}
			for(var i=0; i<templateData.length ;i++){
				tableElem.insertAdjacentHTML('afterbegin', htmlTemplate);
				document.getElementById('playButton').addEventListener("click", function(e){
					saveRowData(templateDataName,templateData, this.parentNode.parentNode.rowIndex);
				});
				document.getElementById('editButton').addEventListener("click", function(e){
					enableTextboxRow(this.parentNode.parentNode.rowIndex);
				});
				
				//to be done later for string interpolation
				//str.replace ('', function(m){ return myCampaignData[i][m]})
			}
			for(var i=0; i<templateData.length ;i++){
				var inputBox = inputBoxRows[i].getElementsByTagName('input');
				inputBox[0].value = templateData[i].name;
				inputBox[1].value = templateData[i].description;
				inputBox[2].value = templateData[i].ownerName;
				inputBox[3].value = templateData[i].readPermissions;
			}
		};
		return{
			pushAllSavedData:function(){htmlTemplateFunc(myCampaignData,"myCampaignData")},
			pushSharedSearchesData:function(){htmlTemplateFunc(mySharedSearchData,"mySharedSearchData")}
		};
	})();
	var allSavedElem = document.getElementById("allSaved");
	var sharedSearchesElem = document.getElementById("sharedSearches");
	allSaved.addEventListener("click",function(){savedTemplateFunc.pushAllSavedData()});
	sharedSearchesElem.addEventListener("click",function(){savedTemplateFunc.pushSharedSearchesData()});
	savedTemplateFunc.pushAllSavedData();
});
