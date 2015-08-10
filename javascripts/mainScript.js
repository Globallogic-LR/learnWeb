$(document).ready(function(){

var currentIndex =0;
var showAllFlag = false;

var campaignData = '[{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"}]';

var myCampaignData = JSON.parse(campaignData);

var initialLoad = function(flag){

for(var i=currentIndex; i<myCampaignData.length ;i++){

	if(currentIndex === myCampaignData.length){
		alert("Data is already upto date");
		return;
	}

	var list = document.createElement("ul");

	var elem1 = document.createElement("li");
	elem1.textContent  = myCampaignData[i].name;

	var elem2 = document.createElement("li");
	elem2.textContent  = myCampaignData[i].dateCreated;

	var elem3 = document.createElement("li");
	elem3.textContent  = myCampaignData[i].lastUpdated;

	var elem4 = document.createElement("li");
	elem4.textContent  = myCampaignData[i].totalViews;

	var elem5 = document.createElement("li");
	elem5.textContent  = myCampaignData[i].sales;

	var elem6 = document.createElement("li");
	elem6.textContent  = myCampaignData[i].endDate;

	list.appendChild(elem1);
	list.appendChild(elem2);
	list.appendChild(elem3);
	list.appendChild(elem4);
	list.appendChild(elem5);
	list.appendChild(elem6);

	var hrElem = document.createElement("hr");

	document.getElementById("campaignDataTable").appendChild(list);
	document.getElementById("campaignDataTable").appendChild(hrElem);

	currentIndex++;

	var rowsNumber = 8;
	if(currentIndex%rowsNumber === 0 && flag===true)
	{
		break;
	}

};

}

var showAllElem = document.getElementById("lblShowAll");

showAllElem.addEventListener("click", function(){

	if(!showAllFlag){
	currentIndex = 0;
	showAllFlag = true;
	}
initialLoad(false);
});

var updateElem = document.getElementById("lblUpdate");
updateElem.addEventListener("click", function(){

if(currentIndex === myCampaignData.length){
	alert("Data is already upto date");
	return;
}
var parentNode = document.getElementById("campaignDataTable");
var oldData = parentNode.getElementsByTagName("ul");
var oldHrTag = parentNode.getElementsByTagName("hr");

for(x = oldData.length - 1; x >= 0; x--){

	oldData[x].parentNode.removeChild(oldData[x]);
	oldHrTag[x].parentNode.removeChild(oldHrTag[x]);
}
initialLoad(true);
});

initialLoad(true);
});