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
	var savedTemplateFunc = (function(){
		var htmlTemplate ='<tr> \
		 		<td id="actionCell" class="td-template-class td-first-template"><i id="playButton" class="fa fa-play"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash-o"></i> </td> \
		 		<td id="nameCell" class="td-template-class">Name</td> \
		 		<td id="descriptionCell" class="td-template-class td-description-template">Description</td> \
		 		<td id="ownerNameCell" class="td-template-class">Owner Name</td> \
		 		<td id="permissionCell" class="td-template-class">Read Permissions</td> \
		 		</tr>';

		var enableTextboxRow = function (element, rowIndex) {
/*			console.log("row index = "+rowIndex);
			console.log("element = "+element);
			if(element == editButtonElems){
				console.log("inside");
			}
			else
			{
				console.log("outside");
			}*/
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
				document.getElementById("nameCell").textContent = templateData[i].name;
				document.getElementById("descriptionCell").textContent = templateData[i].description;
				document.getElementById("ownerNameCell").textContent = templateData[i].ownerName;
				document.getElementById("permissionCell").textContent = templateData[i].readPermissions;	

				//to be done later for string interpolation
				//str.replace ('', function(m){ return myCampaignData[i][m]})
			}
			for (var i = 0; i <faIconArr.length; i++){
				for(var j=0; j<faIconArr[i].length; j++){
					faIconArr[i][j].addEventListener("click", function(e){
						enableTextboxRow(faIconArr[i], this.parentNode.parentNode.rowIndex);
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
