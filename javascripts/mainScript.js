$(document).ready(function(){

console.log("ready");

var currentIndex =0;
var showAllFlag = false;

var text1 = '[{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"},{"name":"Campaign Name", "dateCreated":"12 Dec 2014", "lastUpdated":"18 Dec 2014","totalViews":"5k","sales":"1000 units","endDate":"31 Dec 2014"}]';

console.log(text1);

var myCampaignData = JSON.parse(text1);

console.log(myCampaignData);
console.log(this);


var listLoader = function(flag){

var flag = flag;

for(var i=currentIndex; i<myCampaignData.length ;i++){

		if(currentIndex === myCampaignData.length){
			alert("Data is already upto date");
			console.log("return"); 
			return;
		}
		console.log(myCampaignData[i].name);

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
		console.log(currentIndex);


		if(currentIndex%8 === 0 && flag===true)
		{
			console.log("reached");
			break;
		}

	};

}

document.getElementById("lblShowAll").addEventListener("click", function(){
	
		if(!showAllFlag){
		currentIndex = 0;
		showAllFlag = true;
		console.log("showall");
		}
	
	initialLoad(false);

});

document.getElementById("lblUpdate").addEventListener("click", function(){


	console.log("update click");

	if(currentIndex === myCampaignData.length){
			alert("Data is already upto date");
			console.log("return"); 
			return;
	}

	var parentNode = document.getElementById("campaignDataTable");

	var oldData = parentNode.getElementsByTagName("ul");
	var oldHrTag = parentNode.getElementsByTagName("hr");

	console.log(parentNode);
	console.log(oldData);
	console.log(oldData.length);

	for(x = oldData.length - 1; x >= 0; x--){

		oldData[x].parentNode.removeChild(oldData[x]);
		oldHrTag[x].parentNode.removeChild(oldHrTag[x]);
	}


	initialLoad(true);
	//currentIndex = currentIndex + 8;
});

var initialLoad = function(flag){

	listLoader(flag);

};

initialLoad(true);


/*$.ajax({

	url:"Json/myData.json",
	type:"Get",
	dataType: 'jsonp',
	success:function(json){
         // do stuff with json (in this case an array)
         alert("Success");
    },
    error:function(){
         alert("Error");
    }  

});*/

});