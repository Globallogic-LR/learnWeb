var currentIndex =0;
var showAllFlag = false;
var rowsNumber = 8;
var campaignData = '[{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"}]';
var myCampaignData = JSON.parse(campaignData);

$(document).ready(function(){
	var initialLoad = function(dataCheckflag){
		for(var i=currentIndex; i<myCampaignData.length ;i++){
			if(currentIndex === myCampaignData.length){
				alert("Data is already upto date");
				return;
			}
			
			var list = document.createElement("ul");
			for(var objName in myCampaignData[i]){			
				list.appendChild(getLiWithData(myCampaignData[i][objName]));
			}
			document.getElementById("campaignDataTable").appendChild(list);
			currentIndex++;	
			if(currentIndex%rowsNumber === 0 && dataCheckflag===true)
			{
				break;
			}
		};
	}

	function getLiWithData(listObjectData){
		var elem1 = document.createElement("li");
		elem1.textContent  = listObjectData;
		return elem1;
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
