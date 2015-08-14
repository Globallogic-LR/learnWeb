var currentIndex =0;
var showAllFlag = false;
var campaignData = '[{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"}]';
var myCampaignData = JSON.parse(campaignData);

$(document).ready(function(){
	var initialLoad = function(flag){
		for(var i=currentIndex; i<myCampaignData.length ;i++){
			if(currentIndex === myCampaignData.length){
				alert("Data is already upto date");
				return;
			}
			
			var list = document.createElement("ul");
			var elem1 = document.createElement("li");
			
			function createList(){
				for(var objName in myCampaignData[i]){
					elem1 = document.createElement("li");
					elem1.textContent  =myCampaignData[i][objName];
					list.appendChild(elem1);
				}
				document.getElementById("campaignDataTable").appendChild(list);
			};
			createList();
			currentIndex++;

			var rowsNumber = 8;
			if(currentIndex%rowsNumber === 0 && flag===true)
			{
				break;
			}

		};

	}

	var $showAllElem = document.getElementById("lblShowAll");

	$showAllElem.addEventListener("click", function(){
		if(!showAllFlag){
			currentIndex = 0;
			showAllFlag = true;
		}
		initialLoad(false);
	});

	var $updateElem = document.getElementById("lblUpdate");

	$updateElem.addEventListener("click", function(){
		if(currentIndex === myCampaignData.length){
			alert("Data is already upto date");
			return;
		}
		var $parentNode = document.getElementById("campaignDataTable");
		var oldData = $parentNode.getElementsByTagName("ul");
		for(x = oldData.length - 1; x >= 0; x--){
			$parentNode.removeChild(oldData[x]);
		}
		initialLoad(true);
	});

	initialLoad(true);
});
