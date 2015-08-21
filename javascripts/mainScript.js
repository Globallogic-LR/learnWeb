var campaignData = '[{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"},{"name":"Campaign Name", "description":" Description", "ownerName":" Owner Name","readPermissions":"private"}]';
var myCampaignData = JSON.parse(campaignData);
$(document).ready(function(){
	var savedTemplateFunc = (function(){
		var htmlTemplate ='<tr> \
		 		<td id="actionCell" class="td-template-class td-first-template"><i class="fa fa-play"></i> <i class="fa fa-pencil"></i> <i class="fa fa-trash-o"></i> </td> \
		 		<td id="nameCell" class="td-template-class">Name</td> \
		 		<td id="descriptionCell" class="td-template-class td-description-template">Description</td> \
		 		<td id="ownerNameCell" class="td-template-class">Owner Name</td> \
		 		<td id="permissionCell" class="td-template-class">Read Permissions</td> \
		 		</tr>';

		var htmlTemplateFunc = function(){
			var tableElem = document.getElementById("mainDataTable");
			for(var i=0; i<myCampaignData.length ;i++){
				tableElem.insertAdjacentHTML( 'afterbegin', htmlTemplate );
				document.getElementById("nameCell").textContent = myCampaignData[i].name;
				document.getElementById("descriptionCell").textContent = myCampaignData[i].description;
				document.getElementById("ownerNameCell").textContent = myCampaignData[i].ownerName;
				document.getElementById("permissionCell").textContent = myCampaignData[i].readPermissions;	

				//to be done later for string interpolation
				//str.replace ('', function(m){ return myCampaignData[i][m]})
			}
		};
		return{
			pushHtmlTemplate:htmlTemplateFunc
		};
	})();
	savedTemplateFunc.pushHtmlTemplate();
});
